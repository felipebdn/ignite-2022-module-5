import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const Root = styled(Toast.Root, {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '1.25rem',
  background: '$gray800',
  border: '1px solid $gray600',
  gap: '2rem',
  borderRadius: 'sm',

  div: {
    width: '100%',
    flex: 1,
  },
})
export const Title = styled(Toast.Title, {
  lineHeight: '$base',
  fontWeight: '$bold',
  fontSize: '$xl',

  color: '$white',
})
export const Description = styled(Toast.Description, {
  lineHeight: '$base',
  fontWeight: '$regular',
  fontSize: '$sm',

  color: '$gray200',
})
export const Viewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '25px',
  gap: '10px',
  margin: 0,
  zIndex: 2147483647,
  outline: 'none',
})
export const Close = styled(Toast.Close, {
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',

  svg: {
    color: '$gray200',
  },
})
