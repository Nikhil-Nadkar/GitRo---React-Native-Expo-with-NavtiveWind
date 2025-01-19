import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import FavouriteCard from "../Components/FavouriteCard";

const Favourite = () => {
  const favourite = useSelector((state) => state.favourite.favourite);

  return (
    <SafeAreaView className="h-full px-4 gap-4 bg-[#ffffff]">
      <Text className="text-[24px] font-bold">Favourite</Text>

      <FlatList
        data={favourite}
        ItemSeparatorComponent={<View style={{ height: 12 }} />}
        renderItem={({ item }) => (
          <FavouriteCard
            key={item.owner.id}
            img={item.owner.avatar_url}
            name={item.owner.login}
            reponame={item.full_name}
            description={item.description}
            stars={item.stargazers_count}
            forks={item.forks_count}
            language={item.language}
            repo={item}
          />
        )}
        ListEmptyComponent={
          <Text className="text-gray-500 text-center">No results found.</Text>
        }
      />
    </SafeAreaView>
  );
};

export default Favourite;

const styles = StyleSheet.create({});
