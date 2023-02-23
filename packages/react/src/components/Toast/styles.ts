import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const Root = styled(Toast.Root, {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '1.25rem',
})

export const Title = styled(Toast.Title, {})

export const Description = styled(Toast.Description, {})
