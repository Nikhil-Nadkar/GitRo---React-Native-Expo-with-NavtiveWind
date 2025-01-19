import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import {
  addFavourite,
  removeFavourite,
} from "../../redux/slice/StoreFavourite";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const GitrepoCard = ({
  img,
  name,
  reponame,
  description,
  stars,
  forks,
  language,
  repo,
  triggerPopup,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // handle favourite item/popup/dispatch gitrepo
  const [isFavourite, setIsFavourite] = useState(false);
  const handleFavouriteItems = () => {
    if (!isFavourite) {
      dispatch(addFavourite(repo));
      setIsFavourite(true);
      triggerPopup("Added to favourites!");
    } else {
      dispatch(removeFavourite(repo));
      setIsFavourite(false);
      triggerPopup("Removed from favourites!");
    }
    setIsFavourite(!isFavourite);
  };

  return (
    <Pressable
      className="bg-[#f7f7f7] rounded-3xl shadow-md p-5  w-full"
      onPress={() => navigation.navigate("Repository Details", { repo })}
    >
      {/* owner info */}
      <View className="flex-row justify-between items-center mb-3">
        <View className="flex-row items-center">
          <Image source={{ uri: img }} className="w-14 h-14 rounded-full" />
          <Text className="mx-4 font-bold text-gray-700 text-xl">{name}</Text>
        </View>

        <Ionicons
          onPress={handleFavouriteItems}
          name={isFavourite ? "heart" : "heart-outline"}
          size={28}
          color={isFavourite ? "#F02B4C" : "gray"}
        />
      </View>

      {/* Repo name and description */}
      <View className="mb-3">
        <Text className="text-lg font-medium text-gray-900 mb-1">
          {reponame}
        </Text>
        <Text className="text-gray-600 text-base line-clamp-2">
          {description}
        </Text>
      </View>

      <View className="flex-row justify-between items-center mt-2">
        <View className="flex-row items-center">
          <View className="mr-4 flex-row items-center">
            <Text className="text-yellow-500 mr-1 text-3xl">★</Text>
            <Text className="text-gray-600">{stars}</Text>
          </View>

          <View className="flex-row items-center">
            <Text className="text-green-500 mr-1 text-3xl font-black">⑂</Text>
            <Text className="text-gray-600">{forks}</Text>
          </View>
        </View>

        <View className="flex-row items-center">
          <View className="w-3 h-3 rounded-full bg-blue-500 mr-1" />
          <Text className="text-gray-600">{language}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default GitrepoCard;
