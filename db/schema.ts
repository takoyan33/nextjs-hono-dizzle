import { pgTable, text } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

export const users = pgTable("users_table", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  iamgeUrl: text("image_url").notNull(),
  createdAt: text("created_at").notNull().default("now()"),
  updatedAt: text("updated_at")
    .notNull()
    .$onUpdate(() => new Date().toISOString()),
});

export const insertUser = createInsertSchema(users);