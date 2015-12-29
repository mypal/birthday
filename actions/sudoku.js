export const SDK_INPUT_ON_CHANGE = 'SDK_INPUT_ON_CHANGE';

export function sdkInputOnChange(position, value) {
    return {
        type: SDK_INPUT_ON_CHANGE,
        data: {
            position , value
        }
    };
}
