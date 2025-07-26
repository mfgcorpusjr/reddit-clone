import { supabase } from "@/lib/supabase";
import { TablesInsert } from "@/types/database.types";

export const createPost = async (data: TablesInsert<"posts">) => {
  await supabase.from("posts").insert(data).throwOnError();
};
