import { useEffect } from "react";
import { router } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useMutation } from "@tanstack/react-query";
import Snackbar from "react-native-snackbar";
import { useQueryClient } from "@tanstack/react-query";

import useAuthStore from "@/store/useAuthStore";
import useCommunityStore from "@/store/useCommunityStore";
import useMediaPicker from "@/hooks/useMediaPicker";
import * as PostAPI from "@/api/post";
import * as StorageAPI from "@/api/storage";

const schema = z.object({
  community_id: z.number("Community ID is required"),
  title: z.string("Title is required").trim().min(1, "Title is required"),
  description: z.string().trim().optional(),
  image: z.string().optional(),
});

export type Form = z.infer<typeof schema>;

const useCreatePost = () => {
  const user = useAuthStore((state) => state.user);

  const community = useCommunityStore((state) => state.community);
  const setCommunity = useCommunityStore((state) => state.setCommunity);

  const { media, setMedia, pickMedia } = useMediaPicker();

  const queryClient = useQueryClient();

  const form = useForm({
    resolver: zodResolver(schema),
    mode: "all",
  });

  const query = useMutation({
    mutationFn: async (data: Form) => {
      let imageUrl = "";

      if (media) {
        const fileResponse = await fetch(media.uri);
        const fileArrayBuffer = await fileResponse.arrayBuffer();

        const bucket = "uploads";
        const folder = "posts";
        const fileName = media.uri.split("/").pop();

        const data = await StorageAPI.uploadMedia({
          bucket,
          path: `${folder}/${fileName}`,
          file: fileArrayBuffer,
          contentType: media.mimeType!,
        });

        imageUrl = StorageAPI.getPublicUrl(bucket, data.fullPath);
      }

      return PostAPI.createPost({
        user_id: user?.id || "",
        community_id: data.community_id,
        title: data.title,
        description: data.description || null,
        image: imageUrl || null,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      resetForm();
      router.back();
    },
    onError: (error) => {
      Snackbar.show({
        text: error.message,
        duration: Snackbar.LENGTH_SHORT,
      });
    },
  });

  useEffect(() => {
    if (community) {
      form.setValue("community_id", community.id, { shouldValidate: true });
    }
  }, [community]);

  const resetForm = () => {
    setCommunity(null);
    form.reset();
  };

  return {
    Controller,
    form,
    query,
    community,
    media,
    setMedia,
    pickMedia,
    resetForm,
  };
};

export default useCreatePost;
