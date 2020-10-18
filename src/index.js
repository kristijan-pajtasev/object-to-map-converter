const isObject = (value) => {
    return value.constructor === Object;
}

const valueToMap = value => {
    console.log(value)
    if (!isObject(value) && !Array.isArray(value)) return value;
    if(Array.isArray(value)) {
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

const val = {
    first_name: "john",
    last_name: "doe",
    dob: new Date(),
    address: {
        line_1: "synge street",
    },
    employment: [
        {
            from: new Date(),
            company: "SP",
            address: {
                line_1: "synge street",
            }
        },
        {
            from: new Date(),
            company: "SP",
            address: {
                line_1: "synge street",
            }
        },
        {
            from: new Date(),
            company: {
                name: "sp",
                field: "tech"
            },
            address: {
                line_1: "synge street",
            }
        }
    ]
}
console.log(convertToMap(val))

module.exports = convertToMap;