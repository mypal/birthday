export const LET_INPUT_ON_CHANGE = 'LET_INPUT_ON_CHANGE';

export function letInputOnChange(name, value) {
    return {
        type: LET_INPUT_ON_CHANGE,
        data: {
            name , value
        }
    };
}
