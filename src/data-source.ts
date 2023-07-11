import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

import 'dotenv/config'

export const AppDataSource = new DataSource({
    type: "mongodb",
    database: "test",
    url: process.env.MONGODB_URL,
    useNewUrlParser: true,
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
