import React from 'react'
import {View, Text} from 'react-native'
import tw from '../lib/tailwind'


type Props = {}

const Heading = ({children}) => {
    return (
        <Text style={tw`text-12 font-bold`}>{children}</Text>
    )
}

export default Heading

