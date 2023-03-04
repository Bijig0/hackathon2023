import React from 'react';
import { View, Text, TextInput } from 'react-native';
import tw from '../lib/tailwind';

interface Props {
  label: string;
  leadingIcon?: React.ReactElement;
  trailingIcon?: React.ReactElement;
  iconPosition?: 'left' | 'right';
  error?: string;
  touched?: boolean;
  style?: object;
  onChangeText: (text: string) => void;
  value: string;
  secureTextEntry?: boolean;
}

const Input = ({
  label,
  trailingIcon,
  leadingIcon,
  error,
  touched,
  style,
  onChangeText,
  value,
  secureTextEntry = false,
}: Props) => {
  const renderLeadingIcon = () => {
    if (leadingIcon) {
      return <View style={tw`absolute left-2`}>{leadingIcon}</View>;
    }

    return null;
  };

  const renderTrailingIcon = () => {
    if (trailingIcon) {
      return <View style={tw`absolute right-2`}>{trailingIcon}</View>;
    }

    return null;
  };

  return (
    <View style={style}>
      <Text style={tw`text-gray-800 text-lg mb-2`}>{label}</Text>
      <View style={tw`relative`}>
        {renderLeadingIcon()}
        <TextInput
          style={tw`bg-gray-100 border-2 border-gray-300 p-2 pl-${
            leadingIcon || trailingIcon ? 10 : 2
          } pr-${leadingIcon || trailingIcon ? 10 : 2}`}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={secureTextEntry}
        />
        {renderTrailingIcon()}
      </View>
      {touched && error && <Text style={tw`text-red-500 mt-2`}>{error}</Text>}
    </View>
  );
};

export default Input;
