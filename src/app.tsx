import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Outlet } from 'react-router-dom'
import { Header } from './components/header'
import { CartContextProvider } from './contexts/cart-provider'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <CartContextProvider>
        <Header />
        <Outlet />
      </CartContextProvider>
    </ThemeProvider>
  )
}
