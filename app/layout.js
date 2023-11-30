import ThemeRegistry from '@/theme/ThemeRegistry'
import './globals.css'

export const metadata = {
  title: 'FIS Forum',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body>{children}</body>
      </ThemeRegistry>
    </html>
  )
}
