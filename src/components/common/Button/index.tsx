import {
    Text,
    Pressable,
    type GestureResponderEvent,
    ActivityIndicator,
} from "react-native";
import { styles } from "./style";


type Props = {
    onPress: (event: GestureResponderEvent) => void;
    name: string;
    isLoading?: boolean;

};

export default function Button(props: Props) {
    return (
        <Pressable onPress={props.onPress} style={styles.buttonStyle}>
            {props.isLoading ? (
                <ActivityIndicator color="blue" />
            ) : (
                <Text>{props.name}</Text>
            )}
        </Pressable>
    );
}