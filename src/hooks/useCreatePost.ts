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
import * as PostAPI from "@/api/post";

const schema = z.object({
  user_id: z.string("User ID is required"),
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
  const queryClient = useQueryClient();

  const form = useForm({
    resolver: zodResolver(schema),
    mode: "all",
    defaultValues: {
      user_id: "",
      community_id: 0,
      title: "",
      description: "",
      image: "",
    },
  });

  const query = useMutation({
    mutationFn: (data: Form) => {
      return PostAPI.createPost({
        user_id: data.user_id,
        community_id: data.community_id,
        title: data.title,
        description: data.description || null,
        image: data.image || null,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });

      setCommunity(null);
      form.reset();

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
    if (user) {
      form.setValue("user_id", user.id, { shouldValidate: true });
    }
  }, [user]);

  useEffect(() => {
    if (community) {
      form.setValue("community_id", community.id, { shouldValidate: true });
    }
  }, [community]);

  return {
    Controller,
    form,
    query,
    community,
    setCommunity,
  };
};

export default useCreatePost;
