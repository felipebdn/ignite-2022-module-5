import type { StoryObj, Meta } from '@storybook/react'
import { AvatarProps, Avatar } from '@felipebdn-ignite-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    src: 'https://github.com/felipebdn.png',
    alt: 'Felipe Barbosa',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
