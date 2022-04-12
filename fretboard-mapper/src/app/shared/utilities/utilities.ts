export function hasData(value: any) {
    const isValid = value === undefined || value === null || value === '' ? false : true;
    return isValid;
}
