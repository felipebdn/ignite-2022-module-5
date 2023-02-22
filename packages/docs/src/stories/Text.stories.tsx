import type { StoryObj, Meta } from '@storybook/react'
import { TextProps, Text } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolore maxime, fuga eos harum velit quae quaerat. Voluptatibus corporis quibusdam ipsam? Odit numquam eveniet velit eaque officiis amet quia consequatur.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustonTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
