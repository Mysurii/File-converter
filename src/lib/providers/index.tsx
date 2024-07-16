import type { ReactNode } from 'react'
import { ThemesProvider } from './ThemesProvider'

type Props = {
  children: ReactNode
}

export default function Providers({ children }: Props) {
  return <ThemesProvider>{children}</ThemesProvider>
}
