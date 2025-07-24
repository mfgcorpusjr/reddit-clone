import { useState, useEffect } from "react";
import { Session } from "@supabase/supabase-js";

import { supabase } from "@/lib/supabase";
import useAuthStore from "@/store/useAuthStore";

import * as UserAPI from "@/api/user";

const useAuth = () => {
  const [authLoaded, setAuthLoaded] = useState(false);
  const setSession = useAuthStore((state) => state.setSession);
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      getUser(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      getUser(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const getUser = async (session: Session | null) => {
    try {
      if (session) {
        const data = await UserAPI.getUser(session.user.id);
        setUser(data);
        return;
      }

      setUser(null);
    } catch (error) {
      console.log(error);
    } finally {
      setAuthLoaded(true);
    }
  };

  return {
    authLoaded,
  };
};

export default useAuth;
