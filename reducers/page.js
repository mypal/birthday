import { NAV_INDEX, NAV_SUDOKU, NAV_SQUARE } from '../actions/navigation';

export function page(state = 'index', action) {
    switch (action.type) {
        case NAV_INDEX:
            return 'index';
        case NAV_SUDOKU:
            return 'sudoku';
        case NAV_SQUARE:
            return 'square';
        default:
            return state;
    }
}
