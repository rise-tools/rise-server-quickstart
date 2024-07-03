import { goBack, navigate } from "@rise-tools/kit-expo-router/server";
import { Button, Text, YStack } from "@rise-tools/kitchen-sink/server";


const home = (() => (
    <YStack>
        <Text>{'Home From Server'}</Text>
        <Button onPress={navigate('details')}>Go to Details</Button>
    </YStack>
));

const details = (() => (
    <YStack>
        <Text>{'Details From Server'}</Text>
        <Button onPress={goBack()}>Go Back</Button>
    </YStack>
));


export const navigationExample = {
    home,
    details
}