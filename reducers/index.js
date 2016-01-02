import { combineReducers } from 'redux';
import { page } from './page';
import { sudoku } from './sudoku';
import { square } from './square';
import { letter } from './letter';

const rootReducer = combineReducers({
    page,
    sudoku,
    square,
    letter
});

export default rootReducer;
