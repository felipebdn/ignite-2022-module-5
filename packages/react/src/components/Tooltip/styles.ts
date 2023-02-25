import * as Tooltip from '@radix-ui/react-tooltip'
import { keyframes, styled } from '../../styles'

export const Trigger = styled(Tooltip.Trigger, {
  display: 'flex',
  lineHeight: 0,
  padding: '$1 $3',
  borderRadius: '$lg',

  background: '$gray800',
  color: '$white',
  border: 0,
})

const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})
const slideRightAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})
const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})
const slideLeftAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

export const Content = styled(Tooltip.Content, {
  padding: '$3 $4',
  background: '$gray900',
  color: '$gray100',
  borderRadius: '$sm',

  fontWeight: '$medium',
  fontSize: '$sm',
  lineHeight: '$short',

  willChange: 'transform, opacity',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',

  '&[data-state="delayed-open"][data-side="top"]': {
    animationName: slideDownAndFade,
  },
  '&[data-state="delayed-open"][data-side="right"]': {
    animationName: slideLeftAndFade,
  },
  '&[data-state="delayed-open"][data-side="bottom"]': {
    animationName: slideUpAndFade,
  },
  '&[data-state="delayed-open"][data-side="left"]': {
    animationName: slideRightAndFade,
  },
})

export const Arrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
