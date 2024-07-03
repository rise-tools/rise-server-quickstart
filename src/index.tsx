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

console.log('Starting server on ws://localhost:8888');

createWSServer({ home: incrementer }, 8888);

/*
 * Try some of the examples by replacing this index with the following code:
 */


// import { navigationExample } from './examples/navigation'
// createWSServer(navigationExample, 8888)
