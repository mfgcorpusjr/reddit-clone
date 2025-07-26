import { FlatList, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useHeaderHeight } from "@react-navigation/elements";
import { router } from "expo-router";

import TextInput from "@/components/ui/TextInput";
import CommunityListItem from "@/components/CommunityListItem";
import ListEmpty from "@/components/common/ListEmpty";

import useCommunityList from "@/hooks/useCommunityList";
import useCommunityStore from "@/store/useCommunityStore";
import { Tables } from "@/types/database.types";

export default function CommunitiesScreen() {
  const {
    search,
    setSearch,
    query: { data, isLoading },
  } = useCommunityList();

  const setCommunity = useCommunityStore((state) => state.setCommunity);

  const headerHeight = useHeaderHeight();

  const handleSelectCommunity = (community: Tables<"communities">) => {
    setCommunity(community);
    router.back();
  };

  return (
    <SafeAreaView
      style={{ marginTop: headerHeight }}
      className="flex-1 p-4 gap-4"
      edges={["bottom"]}
    >
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search for a community"
        autoCapitalize="none"
        leftIcon={<Ionicons name="search-outline" size={20} color="gray" />}
        rightIcon={
          <Ionicons
            name="close-circle-outline"
            size={20}
            color="gray"
            onPress={() => setSearch("")}
          />
        }
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={headerHeight}
        className="flex-1"
      >
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <CommunityListItem
              community={item}
              onPress={() => handleSelectCommunity(item)}
            />
          )}
          ListEmptyComponent={
            <ListEmpty text="No communities found" isLoading={isLoading} />
          }
          contentContainerClassName="gap-2"
          showsVerticalScrollIndicator={false}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
