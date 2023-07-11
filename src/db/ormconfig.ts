import dotenv from 'dotenv';

dotenv.config();
dotenv.config({ path: './.env' });

export= {
    type: "mongodb",
    url: process.env.MONGODB_URL,
    database: "test",
    synchronize: true,
    logging: false,
    "entities": [
      "src/entity/*.js"
    ],
    "subscribers": [
      "src/subscriber/*.js"
    ],
    "migrations": [
      "src/migration/*.js"
    ],
    "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
    }
};