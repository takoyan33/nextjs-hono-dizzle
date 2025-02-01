CREATE TABLE "users_table" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"image_url" text NOT NULL,
	"created_at" text DEFAULT 'now()' NOT NULL,
	"updated_at" text NOT NULL,
	CONSTRAINT "users_table_email_unique" UNIQUE("email")
);
