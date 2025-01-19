import {
  Text,
  View,
  TextInput,
  FlatList,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import GitrepoCard from "../Components/GitrepoCard";
import axios from "axios";
import NetInfo from "@react-native-community/netinfo";

// Check Internet
const Home = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  // API
  const API = "https://api.github.com/search/repositories?q=%7Bquery%7D;";

  // store and filter fetch data
  const [gitData, setgitData] = useState([]);
  const [filterData, setFilterData] = useState();

  // store user search result
  const [searchQuery, setSearchQuery] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  // popup msg for add/remove favourite
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const triggerPopup = (message) => {
    setPopupMessage(message);
    setPopupVisible(true);
    setTimeout(() => setPopupVisible(false), 1000); // Hide after 2 seconds
  };

  // fetchdata function and other setting which is related to API fetching
  const fetchData = async () => {
    try {
      const result = await axios.get(API);
      setgitData(result.data.items);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!isConnected) {
      // Show a popup when the internet is disconnected
      Alert.alert(
        "No Internet Connection",
        "Please check your internet connection.",
        [{ text: "OK" }]
      );
    }
    fetchData();
  }, [isConnected]);

  // store and filter data of for search bar
  const handeUserInput = (query) => {
    setSearchQuery(query);
    if (query === "") {
      setFilterData(gitData);
    } else {
      setFilterData(
        gitData.filter(
          (app) =>
            app.full_name.toLowerCase().includes(query.toLowerCase()) ||
            app.owner.login.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  return (
    <SafeAreaView className="h-full px-4 gap-4 bg-[#ffffff]">
      <Text className="text-[24px] font-bold">Welcome Nikhil</Text>
      {/* search bar */}
      <View className="flex-row items-center w-full h-16 border border-gray-300 rounded-2xl px-4 mb-2">
        <Ionicons name="search" size={24} color="gray" />
        <TextInput
          className="flex-1 text-lg px-2"
          placeholder="Enter Git-Repo name"
          placeholderTextColor="gray"
          onChangeText={handeUserInput}
          value={searchQuery}
        />
      </View>

      {/* list of git repo */}
      {isLoading ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        <FlatList
          data={filterData ? filterData : gitData}
          contentContainerStyle={{ paddingBottom: 100 }}
          ItemSeparatorComponent={<View style={{ height: 12 }} />}
          renderItem={({ item }) => (
            <GitrepoCard
              key={item.owner.id}
              img={item.owner.avatar_url}
              name={item.owner.login}
              reponame={item.full_name}
              description={item.description}
              stars={item.stargazers_count}
              forks={item.forks_count}
              language={item.language}
              repo={item}
              triggerPopup={triggerPopup}
            />
          )}
          ListEmptyComponent={
            <Text className="text-gray-500 text-center">No Data found.</Text>
          }
        />
      )}

      {/* popup message for favourite */}
      {popupVisible && (
        <View className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-800 px-4 py-2 rounded-lg shadow-lg z-10">
          <Text className="text-white text-sm">{popupMessage}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;
