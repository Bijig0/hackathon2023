import React from 'react';
import { Text, TextProps } from 'react-native';
import tw from 'twrnc';

interface TypographyProps extends TextProps {
  variant?: 'heading1' | 'heading2' | 'body' | 'caption';
  color?: string;
  children: React.ReactNode;
}

const Typography = ({
  variant = 'body',
  color = 'text-black',
  children,
  ...props
}: TypographyProps) => {
  let styles = tw`font-sans`;

  switch (variant) {
    case 'heading1':
      styles = tw`text-4xl font-bold ${color}`;
      break;
    case 'heading2':
      styles = tw`text-2xl font-bold ${color}`;
      break;
    case 'body':
      styles = tw`text-base font-normal ${color}`;
      break;
    case 'caption':
      styles = tw`text-xs font-normal ${color}`;
      break;
    default:
      styles = tw`text-base font-normal ${color}`;
  }

  return (
    <Text style={styles} {...props}>
      {children}
    </Text>
  );
};

export default Typography;
