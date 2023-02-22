import { ArrowRight } from 'phosphor-react'
import type { StoryObj, Meta } from '@storybook/react'
import { ButtonProps, Button } from '@ignite-ui/react'

export default {
  title: 'Data Display/Button',
  component: Button,

  args: {
    children: 'Send',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
export const Secundary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}
export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}
export const Small: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
    children: 'Cancel',
    size: 'sm',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Proximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
