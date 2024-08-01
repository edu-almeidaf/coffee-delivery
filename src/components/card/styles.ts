import { mixins } from '@/styles/mixins'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 0 1.25rem 1.25rem;
  border-radius: 6px 36px;
  width: 16rem;

  display: flex;
  flex-direction: column;
  text-align: center;
`

export const CoffeeImg = styled.img`
  margin-top: -1.25rem;
  max-width: 7.5rem;
  max-height: 7.5rem;
  align-self: center;
`

export const Tags = styled.div`
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  align-self: center;
  gap: 0.25rem;

  span {
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.colors['yellow-light']};
    color: ${({ theme }) => theme.colors['yellow-dark']};
    text-transform: uppercase;
    ${mixins.fonts.tag}
  }
`

export const Title = styled.h3`
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors['base-subtitle']};
  ${mixins.fonts.titleS}
`

export const Description = styled.span`
  margin-top: 0.5rem;
  width: 100%;

  color: ${({ theme }) => theme.colors['base-label']};
  ${mixins.fonts.textS}
`

export const Control = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.125rem;

  span:first-child {
    ${mixins.fonts.textXS}
    color: ${({ theme }) => theme.colors['base-text']};
  }

  span:last-child {
    ${mixins.fonts.titleM}
    color: ${({ theme }) => theme.colors['base-text']};
  }
`

export const Order = styled.div<{ $itemAdded?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > button {
    background-color: ${({ theme, $itemAdded }) =>
      $itemAdded ? theme.colors['yellow-dark'] : theme.colors['purple-dark']};
    transition: background-color 0.2s;
    border-radius: 6px;
    padding: 0.5rem;
    display: flex;

    &:hover {
      background-color: ${({ theme, $itemAdded }) =>
        $itemAdded ? theme.colors.yellow : theme.colors.purple};
    }
  }
`
