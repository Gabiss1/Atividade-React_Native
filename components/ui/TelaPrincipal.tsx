import { View, Text, Image, Button, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { RootStackParamList } from './types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export function TelaPrincipal(props: {
    title: string,
    description: string
}){
    const nav = useNavigation<HomeScreenProp>()

    return (
        <View>
            <Image></Image>
            <Text>
                {props.title}
                {props.description}
            </Text>

            <Pressable  onPress={() =>
          nav.navigate('Detalhes', {
            title: 'Cardigan',
            descricao: 'Assume iunou nofing'
          })
            }>
                <Text>Abrir  site</Text>
            </Pressable>
        </View>
    )
}