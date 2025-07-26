import { create } from "zustand";

import { Tables } from "@/types/database.types";

type TCommunity = Tables<"communities"> | null;

type CommunityStore = {
  community: TCommunity;
  setCommunity: (community: TCommunity) => void;
};

const useCommunityStore = create<CommunityStore>((set) => ({
  community: null,

  setCommunity: (community: TCommunity) => set({ community }),
}));

export default useCommunityStore;
