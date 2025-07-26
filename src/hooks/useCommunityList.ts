import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";

import * as CommunitiesAPI from "@/api/communities";

const useCommunityList = () => {
  const [search, setSearch] = useState("");
  const [debounceSearch] = useDebounce(search, 1000);

  const query = useQuery({
    queryKey: ["communities", { search: debounceSearch }],
    queryFn: () => CommunitiesAPI.getAllCommunities(debounceSearch),
  });

  return {
    search,
    setSearch,
    query,
  };
};

export default useCommunityList;
