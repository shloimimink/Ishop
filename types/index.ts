import { z } from "zod";
import { insertProductScema } from "@/lib/validators";

export type Product = z.infer<typeof insertProductScema> & {
  id: string;
  rating: string;
  createdAt: Date;
};
