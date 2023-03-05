import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import tw from 'twrnc';

interface ButtonProps extends TouchableOpacityProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'disabled'
    | 'danger'
    | 'warning';
  children: React.ReactNode;
  isFullWidth?: boolean;
}

export const Button = ({
  variant = 'primary',
  children,
  isFullWidth,
  ...props
}: ButtonProps) => {
  const buttonStyles = tw`rounded-md py-2.5 px-4 ${
    isFullWidth ? 'w-full' : 'w-auto'
  }`;

  let selectedStyles = [];

  switch (variant) {
    case 'primary':
      selectedStyles.push(buttonStyles, tw`bg-blue-500`);
      break;
    case 'secondary':
      selectedStyles.push(buttonStyles, tw`bg-white`);
      break;
    case 'outline':
      selectedStyles.push(buttonStyles, tw`border border-blue-500 bg-white`);
      break;
    case 'disabled':
      selectedStyles.push(buttonStyles, tw`bg-gray-400`);
      break;
    case 'danger':
      selectedStyles.push(buttonStyles, tw`bg-red-500`);
      break;
    case 'warning':
      selectedStyles.push(buttonStyles, tw`bg-yellow-500`);
      break;
    default:
      selectedStyles.push(buttonStyles, tw`bg-blue-500`);
  }

  return (
    <TouchableOpacity
      style={selectedStyles}
      {...props}
      disabled={variant === 'disabled'}
    >
      <Text
        style={tw`font-bold text-lg text-center ${
          variant === 'secondary' ? 'text-emerald-400' : 'text-white'
        }`}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
