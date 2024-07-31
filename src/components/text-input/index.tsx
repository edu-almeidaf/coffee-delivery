import {
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  useState,
  FocusEvent,
} from 'react'
import { FieldError } from 'react-hook-form'
import { Box, Container, ErrorMessage } from './styles'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean
  containerProps?: HTMLAttributes<HTMLDivElement>
  error?: FieldError
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput(
    { optional, error, containerProps, onFocus, onBlur, ...props },
    ref,
  ) {
    const [isFocused, setIsFocused] = useState(false)

    function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
      setIsFocused(true)
      onFocus?.(event)
    }

    function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
      setIsFocused(false)
      onBlur?.(event)
    }

    return (
      <Box {...containerProps}>
        <Container data-state={isFocused ? 'focused' : 'blurred'}>
          <input
            type="text"
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={ref}
            {...props}
          />

          {optional && <span>Opcional</span>}
        </Container>

        {error?.message && (
          <ErrorMessage role="alert">{error.message}</ErrorMessage>
        )}
      </Box>
    )
  },
)
