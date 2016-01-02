import { SQR_INPUT_ON_CHANGE } from '../actions/square';
import Immutable from 'immutable';

const ANSWER = [
    6, 1, 5
];

function check(state) {
    var win = true, wrong = true;
    ANSWER.forEach((ele, i) => {
        var val = state.get(''+i);
        if (val === undefined || val === '') {
            wrong = false;
            win = false;
        }
        if (ele != val) {
            win = false;
        }
    });
    return state.set('win', win).set('wrong', !win && wrong);
}

export function square(state = {}, action) {
    state = Immutable.Map(state);
    switch (action.type) {
        case SQR_INPUT_ON_CHANGE:
            var { name, value } = action.data;
            if (/^\d?$/.test(value)) {
                state = state.set(name, value);
            }
            state = check(state);
            break;
        default:
            break;
    }
    return state.toObject();
}