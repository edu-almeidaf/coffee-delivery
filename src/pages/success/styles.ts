import { mixins } from '@/styles/mixins'
import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  max-width: 72.5rem;
  margin: 0 auto;
  padding: 5rem 1.25rem;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2.5rem;

  img {
    margin-bottom: -13px;
  }
`

export const Order = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h2 {
    ${mixins.fonts.titleL}
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }

  span {
    ${mixins.fonts.textL}
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`

export const Info = styled.div`
  border: 2px solid transparent;
  border-radius: 6px 36px;
  width: 100%;
  background-color: transparent;
  background-origin: border-box;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.colors.yellow}, ${theme.colors.purple})`};
`

export const InfoContent = styled.div`
  padding: 2.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      padding: 0.5rem;
      border-radius: 999px;
    }
  }

  > div div {
    display: flex;
    flex-direction: column;
  }
`
