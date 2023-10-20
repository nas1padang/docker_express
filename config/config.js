module.exports = {
    development: {
        username: "supermin",
        password: "supermin",
        database: "todosapp",
        host: "127.0.0.1",
        dialect: "postgres"
    },
    test: {
        use_env_variable: "DATABASE_URL",
        dialect: "postgres"
    }
};
