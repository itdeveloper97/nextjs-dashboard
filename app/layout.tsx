import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import StyledComponentsRegistry from '@/app/lib/styled-components';
import { PropsWithChildren } from 'react';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
