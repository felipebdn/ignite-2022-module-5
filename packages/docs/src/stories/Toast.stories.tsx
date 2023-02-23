import type { StoryObj, Meta } from '@storybook/react'
import { ToastProps, Toast, Box } from '@felipebdn-ignite-ui/react'

export default {
  title: 'Overlay/Toast',
  component: Toast,

  // argTypes: {
  //   children: {},
  // },
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
            }}
          >
            {Story()}
          </Box>
        </>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    title: 'Agendamento realizado',
    date: 'Quarta-feira, 23 de Outubro às 16h',
  },
}
