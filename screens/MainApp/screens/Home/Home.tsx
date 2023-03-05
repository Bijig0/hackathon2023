import React from "react";
import { FlatList, View, Text, Image, TouchableOpacity } from "react-native";
import tw from "../../../../lib/tailwind";
import Card from "../../../../components/Card";
import AppBox from "../../../../components/AppBox";
import Heading from "../../../../components/Heading";
import UserIcon from "../../../../assets/icons/user-svgrepo-com (1).svg";
import { useNavigation } from "@react-navigation/native";

type Props = {};

const data = [
  {
    imgUrl:
      "https://static.euronews.com/articles/stories/07/41/58/32/773x435_cmsv2_27db9763-596e-5480-81d9-8b94ce0000ea-7415832.jpg",
    date: "2023/2/3",
    type: "Article",
    title: 'Hedgehogs nearly extinct from excessive climate heating',
  },
  {
    imgUrl:
      "https://images.pexels.com/photos/1080401/pexels-photo-1080401.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "2023/4/12",
    type: "Newsletter",
    title: "World's oldest tree celebrates its 100th birthday"
  },

  {
    imgUrl:
      "https://static.euronews.com/articles/stories/07/41/03/00/773x435_cmsv2_f6fe1817-b034-5964-97c7-b0b4a9f6f258-7410300.jpg",
    date: "2023/5/1",
    type: "Article",
    title: "Solar panels to reduce emissions by 50% by 2030!"
  },
];

const Home = () => {
  const renderItem = ({ item }) => {
    const { title, imgUrl, date, type } = item;
    return (
      <Card
        variant="large"
        renderRightButton={false}
        imgUrl={imgUrl}
        date={date}
        type={type}
        title={title}
      />
    );
  };

  const navigation = useNavigation();

  return (
    <AppBox>
      <View style={tw`flex-row justify-between items-center`}>
        <Heading>Hi John!</Heading>
        <TouchableOpacity
          onPress={() => navigation.navigate("MainApp", { screen: "Profile" })}
        >
          <UserIcon width={40} height={40} style={tw`mr-5 mt-4`} />
        </TouchableOpacity>
        {/* <Image source={require("../../../assets/icons/UserIcon.png")} /> */}
      </View>
      <Text style={tw`mb-12`}>Let's save the earth together</Text>
      <Text style={tw`text-6 font-bold`}>Featured Resources For You</Text>
      <View style={tw`flex-1`}>
        <FlatList
          horizontal={false}
          data={data}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </AppBox>
  );
};

export default Home;
