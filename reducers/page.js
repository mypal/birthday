import { NAV_INDEX, NAV_SUDOKU, NAV_SQUARE, NAV_LETTER, NAV_RESULT } from '../actions/navigation';

export function page(state = 'index', action) {
    switch (action.type) {
        case NAV_INDEX:
            return 'index';
        case NAV_SUDOKU:
            return 'sudoku';
        case NAV_SQUARE:
            return 'square';
        case NAV_LETTER:
            return 'letter';
        case NAV_RESULT:
            return 'result';
        default:
            return state;
    }
}
