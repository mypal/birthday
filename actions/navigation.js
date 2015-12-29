export const NAV_INDEX = 'NAV_INDEX';
export const NAV_SUDOKU = 'NAV_SUDOKU';
export const NAV_SQUARE = 'NAV_SQUARE';

export function navIndex() {
    return {
        type: NAV_INDEX
    };
}

export function navSudoku() {
    return {
        type: NAV_SUDOKU
    };
}

export function navSquare() {
    return {
        type: NAV_SQUARE
    };
}