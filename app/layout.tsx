import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import StyledComponentsRegistry from '@/app/lib/styled-components';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from '@/app/lib/theme/ThemeProvider';

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
