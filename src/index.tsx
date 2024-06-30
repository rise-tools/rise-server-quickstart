import { goBack, navigate } from '@rise-tools/kit-expo-router/server';
import { Button, Text, YStack } from '@rise-tools/kitchen-sink/server';
import { createWSServer, state, view } from '@rise-tools/server';

const [count, setCount] = state(0);

const incrementer = view((get) => (
  <YStack>
    <Text>The count is {get(count)}</Text>
    <Button
      onPress={() => {
        setCount((c) => c + 1);
      }}
    >
      Plus 1
    </Button>
  </YStack>
));

const home = view(() => (
  <YStack>
    <Text>{'Home From Server'}</Text>
    <Button onPress={navigate('details')}>Go to Details</Button>
  </YStack>
));

const details = view(() => (
  <YStack>
    <Text>{'Details From Server'}</Text>
    <Button onPress={goBack()}>Go Back</Button>
  </YStack>
));

console.log('Starting server on ws://localhost:8888');

createWSServer({ incrementer, home, details }, 8888);
