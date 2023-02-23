import * as IToast from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import { Button } from '../Button'
import { Description, Root, Title } from './styles'

export interface ToastProps extends ComponentProps<typeof Root> {
  title: string
  date: string
}

export function Toast({ date, title, ...props }: ToastProps) {
  return (
    <IToast.Provider>
      <Button size={'sm'}>Clique</Button>
      <Root {...props}>
        <div>
          <Title>{title}</Title>
          <Description>{date}</Description>
        </div>
        <IToast.Action altText="Goto schedule to undo">
          <X weight="bold" />
        </IToast.Action>
      </Root>
    </IToast.Provider>
  )
}
