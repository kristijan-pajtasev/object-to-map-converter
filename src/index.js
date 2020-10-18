const isObject = (value) => {
    return value.constructor === Object;
}

const valueToMap = value => {
    console.log(value)
    if (!isObject(value) && !Array.isArray(value)) return value;
    if (Array.isArray(value)) {
        console.log(value)
        return value.map(element => valueToMap(element))
    }

    const map = new Map(
        Object.entries(value)
            .map(([key, value]) => {
                    if (isObject(value)) return [key, valueToMap(value)]
                    if (Array.isArray(value)) return [key, valueToMap(value)]
                    return [key, value];
                }
            ))
    return map;
}

const convertToMap = value => {
    if (!isObject(value)) throw new Error("Value needs to be Object");
    return valueToMap(value)
}

module.exports = convertToMap;