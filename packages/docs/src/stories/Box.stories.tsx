import type { StoryObj, Meta } from '@storybook/react'
import { BoxProps, Box, Text } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: <Text>Testando o elemento box</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
