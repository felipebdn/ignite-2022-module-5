import type { StoryObj, Meta } from '@storybook/react'
import { TextProps, Text } from '@felipebdn-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolore maxime, fuga eos harum velit quae quaerat. Voluptatibus corporis quibusdam ipsam? Odit numquam eveniet velit eaque officiis amet quia consequatur.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustonTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
