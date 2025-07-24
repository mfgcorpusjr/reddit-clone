import { supabase } from "@/lib/supabase";

import { Form as SignupForm } from "@/app/(auth)/sign-up";
import { Form as SignInForm } from "@/app/(auth)/sign-in";

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
