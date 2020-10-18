module.exports =  {
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