import React from 'react';
import { View, Text, ViewProps } from 'react-native';
import tw from 'twrnc';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface AlertProps extends ViewProps {
  variant?: 'info' | 'success' | 'warning' | 'danger';
  icon?: string;
  message: string;
}

export const Alert = ({
  variant = 'info',
  icon,
  message,
  ...props
}: AlertProps) => {
  let color = '';
  let iconName = '';
  let textColor = '';

  switch (variant) {
    case 'info':
      color = 'bg-blue-100 border-blue-500';
      textColor = 'text-blue-800';
      iconName = 'information-circle-outline';
      break;
    case 'success':
      color = 'bg-green-100 border-green-500';
      textColor = 'text-green-800';
      iconName = 'checkmark-circle-outline';
      break;
    case 'warning':
      color = 'bg-yellow-100 border-yellow-500';
      textColor = 'text-yellow-800';
      iconName = 'warning-outline';
      break;
    case 'danger':
      color = 'bg-red-100 border-red-500';
      textColor = 'text-red-800';
      iconName = 'close-circle-outline';
      break;
  }

  return (
    <View style={tw`flex justify-center items-center`}>
      <View
        style={tw`${color} absolute top-0 p-4 rounded-md border-l-4`}
        {...props}
      >
        <Ionicons
          name={icon || iconName}
          size={24}
          style={tw`mr-2 ${textColor}`}
        />
        <Text style={tw`text-base font-normal text-gray-800`}>{message}</Text>
      </View>
    </View>
  );
};
