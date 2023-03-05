import React from 'react';
import { View, Text, TextInput } from 'react-native';
import tw from '../lib/tailwind';

interface Props {
  label?: string;
  leadingIcon?: React.ReactElement;
  trailingIcon?: React.ReactElement;
  error?: string;
  touched?: boolean;
  style?: object;
  onChangeText: (text: string) => void;
  value: string;
  secureTextEntry?: boolean;
  placeholder?: string;
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
  placeholder,
  secureTextEntry = false,
}: Props) => {
  return (
    <View style={style}>
      {label && <Text style={tw`text-gray-800 text-lg mb-2`}>{label}</Text>}
      <View style={tw`relative`}>
        {leadingIcon && (
          <View style={tw`absolute top-1/4 left-3 z-40`}>{leadingIcon}</View>
        )}
        <TextInput
          style={tw`bg-gray-100 border-2 rounded-md border-gray-300 py-2 px-3 pl-${
            leadingIcon ? 12 : 3.5
          } pr-${trailingIcon ? 12 : 3.5}`}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
        />
        {trailingIcon && (
          <View style={tw`absolute right-2 z-40`}>{trailingIcon}</View>
        )}
      </View>
      {touched && error && <Text style={tw`text-red-500 ml-2`}>{error}</Text>}
    </View>
  );
};

export default Input;
