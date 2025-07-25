import { supabase } from "@/lib/supabase";

export const getAllCommunities = async (search: string) => {
  const { data } = await supabase
    .from("communities")
    .select("*")
    .ilike("name", `%${search}%`)
    .order("name", { ascending: true })
    .throwOnError();

  return data;
};
