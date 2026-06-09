import { View, Text, Image, Button, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { RootStackParamList } from './types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export function TelaPrincipal(props: {
    title: string,
    description: string
}){

    return (
        <View>
            <Image></Image>
            <Text>
                {props.title}
                {props.description}
            </Text>

            <Pressable>
                <Text>Abrir  site</Text>
            </Pressable>
        </View>
    )
}