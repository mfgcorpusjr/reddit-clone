import { create } from "zustand";
import { Session } from "@supabase/supabase-js";

import { Tables } from "@/types/database.types";

type TSession = Session | null;
type TUser = Tables<"users"> | null;

type AuthStore = {
  session: TSession;
  user: TUser;
  setSession: (session: TSession) => void;
  setUser: (user: TUser) => void;
};

const useAuthStore = create<AuthStore>((set) => ({
  session: null,
  user: null,

  setSession: (session: TSession) => set({ session }),
  setUser: (user: TUser) => set({ user }),
}));

export default useAuthStore;
