let configSettings = {
  client: "postgres",
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  ssl: { rejectUnauthorized: false },
};

if (process.env.NODE_ENV === "development") {
  configSettings = {
    client: "postgres",
    host: process.env.DATABASE_HOST_DEV,
    port: process.env.DATABASE_PORT_DEV,
    database: process.env.DATABASE_NAME_DEV,
    username: process.env.DATABASE_USERNAME_DEV,
    password: process.env.DATABASE_PASSWORD_DEV,
    ssl: false,
  };
}

module.exports = () => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: configSettings,
      options: {},
    },
  },
});
