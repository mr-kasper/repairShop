ALTER TABLE "tickets" ALTER COLUMN "description" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "tickets" ALTER COLUMN "tech" SET DEFAULT 'unassigned';