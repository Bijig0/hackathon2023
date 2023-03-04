import React from "react";
import { FlatList, View, Text } from "react-native";
import tw from "../../../lib/tailwind";
import Card from "../../../components/Card";
import AppBox from "../../../components/AppBox";

type Props = {};

const Home = () => {
  const renderItem = (item: any) => {
    return (
      <Card
        variant="large"
        renderRightButton={false}
        imgUrl="https://images.pexels.com/photos/1080401/pexels-photo-1080401.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
    );
  };

  return (
    <AppBox>
      <View style={tw`flex-1`}>
        <FlatList
          horizontal={false}
          data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </AppBox>
  );
};

export default Home;
