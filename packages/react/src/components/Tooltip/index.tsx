import * as ITooltip from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'
import { Arrow, Content, Trigger } from './styles'

export interface TooltipProps extends ComponentProps<typeof Content> {
  content: string
}

export function Tooltip({ content, ...props }: TooltipProps) {
  return (
    <ITooltip.Provider>
      <ITooltip.Root>
        <Trigger>
          <p>Coloque o mouse aqui</p>
        </Trigger>
        <ITooltip.Portal>
          <Content sideOffset={5} {...props}>
            {content}
            <Arrow />
          </Content>
        </ITooltip.Portal>
      </ITooltip.Root>
    </ITooltip.Provider>
  )
}
