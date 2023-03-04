import { View, Text, Image } from "react-native";
import React, { useContext } from "react";
import RawRestaurantImg from "../../../assets/restaurant.jpg";
import ClockIcon from "../../../assets/svgs/ClockIcon.svg";
import tw from "../lib/tailwind";

type Props = {
    image_url: string;
    style?: string
};

const HomeImg = (props: Props) => {
  return (
    <View style={tw`flex-3 relative`}>
      <Image
        // onLoad={() => context.setNumberOfImagesLoaded((prev) => prev + 1)}
        source={{ uri: props.image_url }}
        // cacheKey={`${props.image_url.slice(-5, -1)}--thumb`}
        style={tw`flex-1 w-full`}
      />
    </View>
  );
};

export default HomeImg;
