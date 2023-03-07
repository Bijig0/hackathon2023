import React from "react";
import { FlatList, Image, Share, Text, View } from "react-native";
import AppBox from "../../../components/AppBox";
import tw from "../../../lib/tailwind";
import RecyclingBinIcon from "../../../assets/icons/recycle-bin-svgrepo-com.svg";
import CO2Icon from "../../../assets/icons/carbon-dioxide-concentration-svgrepo-com.svg";
import LoveIcon from "../../../assets/icons/love-svgrepo-com.svg";
import CapitalizeIcon from "../../../assets/icons/letter-case-capitalize-svgrepo-com.svg";
import ShareIcon from "../../../assets/icons/share-2-svgrepo-com.svg";
import CancelIcon from "../../../assets/icons/cancel-svgrepo-com.svg";
import IconBar from "../../../components/IconBar";

type Props = {};

const Details = () => {
  const renderItem = ({ item: text }) => {
    return <Text style={tw`text-4 ml-2 mb-1`}>{`\u2022 ${text}`}</Text>;
  };

  return (
    <AppBox>
      <IconBar />
      <Image
        //   Make it content fit
        style={tw`h-60 w-full rounded-xl`}
        source={{
          uri: "https://i.pinimg.com/originals/70/77/26/707726398081c5ffbc5c9cd02076ae46.jpg",
        }}
      />
      <Text style={tw`font-bold text-12 my-2`}>It's A Paper Cup</Text>

      <View style={tw`flex-row items-center`}>
        <RecyclingBinIcon width={20} height={20} />
        <Text style={tw`text-4 my-2 ml-2`}>Recyclable Waste</Text>
      </View>

      <View style={tw`flex-row items-center mb-2`}>
        <CO2Icon width={20} height={20} />
        <Text style={tw`text-4 my-2 ml-2`}>Carbon footprint value: 1.3 kg</Text>
      </View>

      <Text style={tw`text-5 font-bold mt-4 mb-1`}>
        Here's how you could recycle it
      </Text>
      <FlatList
        style={tw`max-h-20`}
        scrollEnabled={false}
        data={[
          "Remove the paper sleeve for coffee cup",
          "Throw the straw away",
          "Compost the paper as fertilizer",
        ]}
        renderItem={renderItem}
      />

      <Text style={tw`text-5 font-bold mb-1 mt-8`}>
        Here's how you could reduce carbon emissions:
      </Text>
      <FlatList
        scrollEnabled={false}
        data={[
          "Use carbon offsets to reduce your footprint value",
          "Understand how your actions affect nature",
          "Plant a tree a day",
        ]}
        renderItem={renderItem}
      />
    </AppBox>
  );
};
export default Details;
