import { InferSelectModel } from "drizzle-orm";
import {
    pgTable,
    varchar,
    timestamp,
    json,
    uuid,
    boolean,
} from "drizzle-orm/pg-core";

export const user = pgTable("User", {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
    email: varchar("email", { length: 64 }).notNull(),
    password: varchar("password", { length: 64 }),
});

export type User = InferSelectModel<typeof user>;
