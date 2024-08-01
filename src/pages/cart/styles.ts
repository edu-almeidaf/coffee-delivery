import { mixins } from '@/styles/mixins'
import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  max-width: 72.5rem;
  padding: 2.5rem 1.25rem;
  margin: 0 auto;
  gap: 2rem;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    ${mixins.fonts.titleXS};
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

export const FormsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['base-card']};
  width: 100%;
  min-width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const AddressContainer = styled(FormsContainer)``

export const Heading = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    span {
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }

    p {
      ${mixins.fonts.textS}
    }
  }
`

export const AddressHeading = styled(Heading)`
  svg {
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`

export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-template-columns: 12.5rem 1fr 3.75rem;
  gap: 1rem 0.75rem;
`

export const PaymentContainer = styled(FormsContainer)``

export const PaymentHeading = styled(Heading)`
  svg {
    color: ${({ theme }) => theme.colors.purple};
  }
`

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
  }
`

export const Coffee = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    gap: 1.25rem;

    > img {
      width: 4rem;
      height: 4rem;
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  > aside {
    font-weight: 700;
  }
`

export const CoffeeInfo = styled.div`
  display: flex;
  gap: 0.5rem;

  > button {
    padding: 0.375rem 0.5rem;
    background-color: ${({ theme }) => theme.colors['base-button']};
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    transition: all 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors['base-hover']};
    }

    > svg {
      color: ${({ theme }) => theme.colors.purple};
    }

    > span {
      ${mixins.fonts.buttonM}
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors['base-text']};
    }
  }
`

export const CartTotal = styled.div`
  padding: 2.5rem;
  border-radius: 6px 8px;
  background-color: ${({ theme }) => theme.colors['base-card']};
  width: 100%;
  min-width: 28rem;

  > span {
    display: block;
    height: 1px;
    background-color: ${({ theme }) => theme.colors['base-button']};
    margin: 1.5rem 0;
  }
`

export const CartTotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-child {
      ${mixins.fonts.textS};
    }

    span:last-child {
      ${mixins.fonts.textM};
    }
  }

  div:last-child {
    span {
      ${mixins.fonts.textL};
      font-weight: 700;
    }
  }
`

export const CheckoutButton = styled.button`
  margin-top: 1.5rem;
  width: 100%;
  padding: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  ${mixins.fonts.buttonG}
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.yellow};
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`

export const PaymentErrorMessage = styled.p`
  ${mixins.fonts.textXS}
  font-weight: 400;
  color: ${({ theme }) => theme.colors.danger};
`
