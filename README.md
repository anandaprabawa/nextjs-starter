# NextJS Starter

Bootstrap a developer-friendly NextJS app configured with:

- TypeScript
- Linting with ESLint
- Formatting with Prettier
- Testing with Jest and React Testing Library
- Styling with TailwindCSS
- VSCode configured for linting and formatting on save

## Additional Advantages

### Persistent Layout

Easy to use persistent layout with fully type definition support. Ensure that you don't import the `NextPage` type for pages and `AppProps` type on custom app (`_app.tsx`).

```tsx
// Don't
import { NextPage } from 'next'

const Home: NextPage = (): JSX.Element => ()
export default Home

// Do
const Home: NextPage = (): JSX.Element => ()
export default Home
```
