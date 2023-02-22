import type { StoryObj, Meta } from '@storybook/react'
import { HeadingProps, Heading } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'Custon',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
export const CustonTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
}
