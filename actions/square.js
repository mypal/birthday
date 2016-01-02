export const SQR_INPUT_ON_CHANGE = 'SQR_INPUT_ON_CHANGE';

export function sqrInputOnChange(name, value) {
    return {
        type: SQR_INPUT_ON_CHANGE,
        data: {
            name , value
        }
    };
}
