import { z } from "zod";

export const ProjectSchema = z.object({
  projectType: z.string(),
  features: z.array(z.string()),
  tech: z.array(z.string()),
});

export type Project = z.infer<typeof ProjectSchema>;
