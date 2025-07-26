import { Pressable, Image } from "react-native";
import { Tables } from "@/types/database.types";

import Text from "@/components/ui/Text";

type CommunityListItemProps = {
  community: Tables<"communities">;
  onPress: () => void;
};

export default function CommunityListItem({
  community,
  onPress,
}: CommunityListItemProps) {
  return (
    <Pressable className="flex-row items-center gap-4 p-2" onPress={onPress}>
      <Image
        className="w-10 aspect-square rounded-full"
        source={{ uri: community.avatar }}
      />
      <Text>{community.slug}</Text>
    </Pressable>
  );
}
