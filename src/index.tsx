import { createWSServer, state, view } from '@rise-tools/server'
import { YStack, Text, Button } from '@rise-tools/kitchen-sink/server'

const [count, setCount] = state(0)

const incrementer = view(get => (
    <YStack>
        <Text>The count is {get(count)}</Text>
        <Button onPress={() => {
            setCount(c => c + 1)
        }}>
            Plus 1
        </Button>
    </YStack>
))

console.log('Starting server on ws://localhost:8888')

createWSServer({ incrementer }, 8888)