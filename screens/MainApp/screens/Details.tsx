import React from "react";
import { FlatList, Image, Text } from "react-native";
import AppBox from "../../../components/AppBox";
import tw from "../../../lib/tailwind";

type Props = {};

const Details = () => {
  const renderItem = () => {
    return <Text style={tw`text-4 ml-4`}>{`\u2022 Lorem Ipsum`}</Text>;
  };

  return (
    <AppBox>
      <Image
        //   Make it content fit
        style={tw`h-60 w-full rounded-xl`}
        source={{
          uri: "https://www.seriouseats.com/thmb/-KA2hwMofR2okTRndfsKtapFG4Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg",
        }}
      />
      <Text style={tw`text-grey-100 font-bold text-12 my-2`}>It's A Steak</Text>
      <Text style={tw`text-4 my-2`}>Food Waste</Text>
      <Text style={tw`text-4 mb-8`}>6x46m3</Text>

      <Text style={tw`text-5 font-bold mb-1`}>
        Here's how you could recycle it
      </Text>
          <FlatList
              style={tw`max-h-20`}
        scrollEnabled={false}
        data={["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"]}
        renderItem={renderItem}
      />

      <Text style={tw`text-5 font-bold mb-1`}>
        Here's how you could reduce carbon emissions
      </Text>
      <FlatList
        scrollEnabled={false}
        data={["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"]}
        renderItem={renderItem}
      />
    </AppBox>
  );
};
export default Details;
