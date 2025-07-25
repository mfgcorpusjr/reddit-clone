import { supabase } from "@/lib/supabase";

export const getUser = async (id: string) => {
  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("id", id)
    .single()
    .throwOnError();

  return data;
};
