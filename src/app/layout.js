import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import DefaultPropsProvider from "@mui/material/DefaultPropsProvider";

import { Container, CssBaseline } from "@mui/material";
import Navigation from "./Navigation";
import "@mui/material-pigment-css/styles.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <DefaultPropsProvider value={{}}>
            <CssBaseline />
            <Navigation />
            <Container maxWidth={false}>{children}</Container>
          </DefaultPropsProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
