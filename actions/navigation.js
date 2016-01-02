export const NAV_INDEX = 'NAV_INDEX';
export const NAV_SUDOKU = 'NAV_SUDOKU';
export const NAV_SQUARE = 'NAV_SQUARE';
export const NAV_LETTER = 'NAV_LETTER';
export const NAV_RESULT = 'NAV_RESULT';

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
export function navLetter() {
    return {
        type: NAV_LETTER
    };
}
export function navResult() {
    return {
        type: NAV_RESULT
    };
}
