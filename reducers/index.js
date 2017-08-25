import { combineReducers } from 'redux';
import { page } from './page';
import { sudoku } from './sudoku';
import { square } from './square';
import { letter } from './letter';
import { TICK } from '../actions/timer';
import {time2string} from '../util/util';

const rootReducer = combineReducers({
    page,
    sudoku,
    square,
    letter,
    time: function (state = '', action) {
        switch (action.type) {
            case TICK:
                return time2string(action.data.time);
            default:
                return state;
        }
    }
});

export default rootReducer;
