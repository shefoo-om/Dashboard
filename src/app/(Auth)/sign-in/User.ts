export const users = [
    {
        id: "11",
        email: "aa@aa.io",
        password: "11221122",
    },
    {
        id: "12",
        email: "oo@aa.io",
        password: "11111111",
    },
    {
        id: "13",
        email: "qq@aa.io",
        password: "22222222",
    },
];

export function findUserByEmail(email: string) {
    return users.find((user) => user.email === email);
}

// Add a function to add a new user
export function addUser(id: string, email: string, password: string) {
    const existingUser = findUserByEmail(email);
    if (existingUser) {
        throw new Error("User with this email already exists");
    }

    users.push({ id, email, password });
}
