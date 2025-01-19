import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import React from "react";

const GitDetail = ({ route }) => {
  // get the item from the props using params
  const { repo } = route.params;

  // fetch data and format it
  const createdate = new Date(repo.created_at);
  const formattedDatecreate = createdate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // fetch data and format it
  const updatedate = new Date(repo.updated_at);
  const formattedDateupdate = updatedate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <View className="bg-gray-50 min-h-screen p-4">
      <View className="bg-white rounded-lg shadow-md p-6 mb-4 ">
        <View className="flex-row items-center justify-between mb-6 ">
          <View className="flex-row items-center ">
            <Image
              source={{
                uri: repo.owner.avatar_url,
              }}
              className="w-24 h-24 rounded-full"
            />
            <View className="ml-3 flex-1">
              <Text className="text-2xl font-bold text-gray-900 ">
                {repo.full_name}
              </Text>
              <Text className="text-gray-600">{repo.owner.login}</Text>
            </View>
          </View>
        </View>

        <View className="mb-6">
          <Text className="text-lg font-semibold text-gray-900 mb-1">
            Description
          </Text>
          <Text className="text-gray-700 text-lg">{repo.description}</Text>
        </View>

        <View className="flex-row justify-between items-center mb-6">
          <View className="bg-gray-50 rounded-lg p-3 flex-1 mr-2">
            <View className="flex-row items-center">
              <Text className="text-yellow-500 mr-2 text-[26px]">★</Text>
              <Text className="font-bold text-gray-900 text-xl">
                {repo.stargazers_count}
              </Text>
              <Text className="text-gray-600 text-lg mx-2">Stars</Text>
            </View>
          </View>

          <View className="bg-gray-50 rounded-lg p-3 flex-1 mx-2">
            <View className="flex-row items-center">
              <Text className="text-green-500 mr-2 text-3xl font-bold ">⑂</Text>
              <Text className="font-bold text-gray-900 text-xl">
                {repo.forks_count}
              </Text>
              <Text className="text-gray-600 text-lg mx-2">Forks</Text>
            </View>
          </View>
        </View>

        <View className="bg-gray-50 rounded-lg p-3 w-1/2 mb-6">
          <View className="flex-row items-center">
            <View className="w-3 h-3 rounded-full bg-blue-500 mr-1" />
            <Text className="font-bold text-gray-900 text-lg">
              {repo.language}
            </Text>
          </View>
          <Text className="text-gray-600 text-base mx-2">Language</Text>
        </View>

        <View className="mb-6">
          <View className="flex-row justify-between mb-2">
            <Text className="text-gray-600">Created</Text>
            <Text className="text-gray-900">{formattedDatecreate}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-600">Last Updated</Text>
            <Text className="text-gray-900">{formattedDateupdate}</Text>
          </View>
        </View>

        <TouchableOpacity
          className="bg-gray-900 px-4 py-6 rounded-lg mt-12"
          onPress={() => Linking.openURL(repo.html_url)}
        >
          <Text className="text-white text-center font-medium text-lg">
            View on GitHub
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GitDetail;
