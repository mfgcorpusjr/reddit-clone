import { supabase } from "@/lib/supabase";

type UploadMedia = {
  bucket: string;
  path: string;
  file: ArrayBuffer;
  contentType: string;
};

export const uploadMedia = async ({
  bucket,
  path,
  file,
  contentType,
}: UploadMedia) => {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, file, { contentType });

  if (error) throw error;
  return data;
};

export const getPublicUrl = (bucket: string, path: string) => {
  const { data } = supabase.storage.from(bucket).getPublicUrl(path);

  return data.publicUrl;
};
