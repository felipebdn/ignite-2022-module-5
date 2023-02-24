import * as IToast from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps, useState } from 'react'
import { Button } from '../Button'
import { Close, Description, Root, Title, Viewport } from './styles'

export interface ToastProps extends ComponentProps<typeof Root> {
  title: string
  date: string
}

export function Toast({ date, title, ...props }: ToastProps) {
  const [open, setOpen] = useState(false)

  return (
    <IToast.Provider swipeDirection={'right'}>
      <Button
        size={'sm'}
        onClick={() => {
          if (open) {
            setOpen(false)
            setTimeout(() => {
              setOpen(true)
            }, 4000)
          } else {
            setOpen(true)
          }
        }}
      >
        Clique
      </Button>
      <Root {...props} open={open} onOpenChange={setOpen}>
        <div>
          <Title>{title}</Title>
          <Description>{date}</Description>
        </div>
        <Close>
          <X weight="bold" size={20} />
        </Close>
      </Root>
      <Viewport />
    </IToast.Provider>
  )
}
