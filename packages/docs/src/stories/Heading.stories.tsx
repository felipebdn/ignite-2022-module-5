import type { StoryObj, Meta } from '@storybook/react'
import { HeadingProps, Heading } from '@felipebdn-ignite-ui/react'

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
    size: 'md',
    children: 'H1 Heading',
    as: 'h1',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão heading sempre será um `h2`, mas podemos alterar isso coma propriedade `as`.',
      },
    },
  },
}
