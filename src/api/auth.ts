import { supabase } from "@/lib/supabase";

import { Form as SignupForm } from "@/hooks/useSignUp";
import { Form as SignInForm } from "@/hooks/useSignIn";

export const signUp = async (data: SignupForm) => {
  const { error } = await supabase.auth.signUp({
    ...data,
    options: {
      data: {
        username: data.username,
      },
    },
  });

  if (error) throw error;
};

export const signIn = async (data: SignInForm) => {
  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) throw error;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) throw error;
};
