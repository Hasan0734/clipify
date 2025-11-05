import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateShortId() {
  return Math.random().toString(36).slice(2, 8);
}


export const clipSchema = z
  .object({
    content: z
      .string()
      .trim()
      .min(1, { message: "Content cannot be empty" })
      .max(5000, { message: "Content must be less than 5000 characters" }),
    type: z.enum(["text", "image", "link"]).describe("Please select a clip type"),
    isFavorite: z.boolean().default(false),
  })
  // Add superRefine to the object schema for cross-field validation
  .superRefine((data, ctx) => {
    if (data.type === "link") {
      // Use Zod's built-in URL validation
      const urlValidation = z.string().url({ message: "Content must be a valid URL when type is link" });
      
      const result = urlValidation.safeParse(data.content);
      
      if (!result.success) {
        // If URL validation fails, add a custom issue to the 'content' field
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: result.error?.issues?.[0]?.message ?? "Content must be a valid URL when type is link", // Use the specific URL error message
          path: ["content"], // Point the error to the 'content' field
        });
      }
    }
  });