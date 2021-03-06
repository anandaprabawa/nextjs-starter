import { render, RenderResult } from '@testing-library/react'

const Providers: React.ComponentType = ({ children }) => {
  return <>{children}</>
}

const customRender = (ui: React.ReactElement, options = {}): RenderResult =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'
// override render method
export { customRender as render }
