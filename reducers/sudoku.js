import { SDK_INPUT_ON_CHANGE } from '../actions/sudoku';
import Immutable from 'immutable';
import sudokuOrigin from '../const/sudoku-origin';
import $ from 'jquery';

function mod(n, m) {
    return Math.round(n%m);
}

function div(n, m) {
    return Math.round((n-n%m)/m);
}

function genList(position) {
    var list = [position];

    //row
    var pos = div(position, 9)*9;
    var end = pos+9;

    for (; pos < end; pos++) {
        if (pos != position) {
            list.push(pos);
        }
    }

    //column
    pos = mod(position, 9);
    end = 81;
    for (; pos < end; pos += 9) {
        if (pos != position) {
            list.push(pos);
        }
    }

    //group
    var x = div(position, 9),
        y = mod(position, 9);
    var gx = div(x, 3),
        gy = div(y, 3),
        xx = mod(x, 3),
        yy = mod(y, 3);

    for (let i = 0; i < 3; i++) {
        if (i != xx) {
            for (let j = 0; j < 3; j++) {
                if (j != yy) {
                    list.push((gx*3+i)*9+gy*3+j);
                }
            }
        }
    }
    return list;
}

function check(position, state) {
    genList(position).forEach(pos => {
        let ele = state.get(''+pos);
        if (!ele || !ele.value) {
            return;
        }
        var same = genList(pos).some(p => {
            if (p != pos) {
                let e = state.get(''+p);
                return e && e.value == ele.value;
            }
            return false;
        });
        state = state.set(''+pos, Immutable.Map(ele).merge({ same }).toObject());
    });

    return state;
}

function loadSudoku() {
    var state = {};
    sudokuOrigin.forEach(ele => {
        state[ele[0]*9+ele[1]] = {
            value: ""+ele[2],
            readonly: true,
            same: false
        };
    });
    return Immutable.Map(state);
}

function checkWin(state) {
    for (let i = 0; i < 81; i++) {
        let ele = state.get(''+i);
        if (!ele || !ele.value || ele.same) {
            return false;
        }
    }
    return true;
}

export function sudoku(state = null, action) {
    if (state === null) {
        state = loadSudoku();
    } else {
        state = Immutable.Map(state);
    }
    switch (action.type) {
        case SDK_INPUT_ON_CHANGE:
            var { position, value } = action.data;
            position += '';
            var ele = Immutable.Map(state.get(position)).set('same', false);
            if (/^[1-9]?$/.test(value)) {
                ele = ele.merge({
                    value: value
                });
            }
            state = state.set(position, ele.toObject());
            state = check(position, state);
            var win = checkWin(state);
            if (win) {
                state = state.set('win', true);
            }
            break;
        default:
            break;
    }
    return state.toObject();
}
