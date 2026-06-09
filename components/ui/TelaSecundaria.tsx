import { View, Text } from "react-native"

type Props = {
    title: string,
    description: string
}

export function TelaSecundaria(props: Props) {
    return (
        <View>
            <Text>
                {props.title}
            </Text>
            <Text>
                {props.description}
            </Text>
        </View>
    )
}