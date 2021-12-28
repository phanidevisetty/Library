const parseJson = input => {
    try {
        return JSON.parse(input);
    } catch (ex) {}
    return false;
};

const stringfyJson = input => {
    try {
        return JSON.stringify(input);
    } catch (ex) {}
    return false;
};