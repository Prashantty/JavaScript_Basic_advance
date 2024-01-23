const users = [
    { firstName: "prashant", lastName: "Kumar", age: 26 },
    { firstName: "Aman", lastName: "Kumar", age: 55 },
    { firstName: "Prabhat", lastName: "Dubey", age: 34 },
    { firstName: "Ashutosh", lastName: "Mishra", age: 27 },
]

const output = users.filter((x) => x.age < 30).map((x) => x.firstName);

console.log(output);