const typeOF = (any) => {
    return Object.prototype.toString.call(any).slice(8, -1).toLowerCase();
};

export { typeOF };
