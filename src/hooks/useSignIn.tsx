import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useMutation } from "@tanstack/react-query";
import Snackbar from "react-native-snackbar";

import * as AuthAPI from "@/api/auth";

const schema = z.object({
  email: z.email("Invalid email").trim(),
  password: z.string("Password is required").trim(),
});

export type Form = z.infer<typeof schema>;

const useSignIn = () => {
  const form = useForm({
    resolver: zodResolver(schema),
  });

  const query = useMutation({
    mutationFn: AuthAPI.signIn,
    onError: (error) => {
      form.reset();

      Snackbar.show({
        text: error.message,
        duration: Snackbar.LENGTH_SHORT,
      });
    },
  });

  return {
    Controller,
    form,
    query,
  };
};

export default useSignIn;
