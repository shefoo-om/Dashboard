export const users = [
    {
        id: "1",
        email: "aa@aa.io",
        firstName: "admin",
        lastName: "1",
        password: "11221122",
    },
    {
        id: "2",
        email: "oo@aa.io",
        firstName: "admin1",
        lastName: "2",
        password: "11111111",
    },
    {
        id: "3",
        email: "qq@aa.io",
        firstName: "admin1",
        lastName: "3",
        password: "22222222",
    },

];

export function findUserByEmail(email: string) {
    return users.find((user) => user.email === email);
}

// Add a function to add a new user
export function addUser(id: string, email: string, firstName: string, lastName: string, password: string) {
    const existingUser = findUserByEmail(email);
    if (existingUser) {
        throw new Error("User with this email already exists");
    }

    users.push({ id, email, firstName, lastName, password });
}
