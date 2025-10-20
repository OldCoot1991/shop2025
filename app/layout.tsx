import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import theme from "@/theme";
import { LayoutContainer } from "@/layout/Layout";

export const metadata: Metadata = {
  title: "Home shop",
  description: "Оплата услуг по вывозу мусора и других комунальных услуг",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <LayoutContainer>
              {children}
            </LayoutContainer>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
