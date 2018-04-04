// Regex
const regex = {
    integer: /^-?\d+$/,
    decimal: /^-?\d*\.?\d+$/,
    boolean: /^(true|false)$/,
    null: /^null$/,
    undefined: /^undefined$/,
};

/**
 * Format value
 * @param value
 * @return {*}
 */
const parseValue = (value) => {
    if (regex.integer.test(value)) {
        return parseInt(value, 10);
    } else if (regex.decimal.test(value)) {
        return parseFloat(value);
    } else if (regex.boolean.test(value)) {
        return value === 'true';
    } else if (regex.null.test(value)) {
        return null;
    } else if (regex.undefined.test(value)) {
        return undefined;
    }
    return value;
};

/**
 * Pretty query middleware for koa
 */
export default ({ override = true } = {}) => async (ctx, next) => {
    const query = ctx.query;
    const result = {};
    console.log(query)
    // Transform
    Object.keys(query).filter(n => n).forEach((key) => {
        console.log(key);
        const value = query[key];
        result[key] = Array.isArray(value) ? value.map(n => parseValue(n)) : parseValue(value);
        if (result[key] === undefined || result[key] === null || result[key] === '') {
            delete result[key];
            delete ctx.query[key];
        }

    });
    // Assign
    if (override) {
        Object.assign(ctx.query, result);
    } else {
        ctx.prettyQuery = result;
    }
    await next();
};