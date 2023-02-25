import type { StoryObj, Meta } from '@storybook/react'
import { TooltipProps, Tooltip, Box } from '@felipebdn-ignite-ui/react'

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  argTypes: {
    content: {
      control: {
        type: 'text',
      },
    },
    side: {
      options: ['right', 'left', 'top', 'bottom'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  args: {
    content: '21 de Outubro - Indisponível',
  },

  decorators: [
    (Story) => {
      return (
        <>
          <Box
            as="label"
            css={{
              display: 'flex',
              flexDirection: 'column',
              gap: '$2',
              alignItems: 'center',
              padding: '5rem',
            }}
          >
            {Story()}
          </Box>
        </>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
