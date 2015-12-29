import { combineReducers } from 'redux';
import { page } from './page';
import { sudoku } from './sudoku';

const rootReducer = combineReducers({
    page,
    sudoku
});

export default rootReducer;
