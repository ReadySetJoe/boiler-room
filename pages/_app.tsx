import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../styles/globals.css';

import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { AppBar, Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import ErrorBoundary from '../components/ErrorBoundary';
import Footer from '../components/footer';
import Header from '../components/header';
import { ToastProvider } from '../contexts/ToastContext';
import client from '../lib/apollo';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: {
  Component: React.ElementType;
  pageProps: { session: any; [key: string]: any };
}) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Boiler Room: Steam Utilities with Utility (Hopefully)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionProvider session={session}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <ToastProvider>
            <ErrorBoundary>
              <AppBar position="static">
                <Header />
              </AppBar>
              <Container
                component="main"
                maxWidth="lg"
                sx={{ paddingTop: 5, minHeight: '100vh' }}
              >
                <Component {...pageProps} />
              </Container>
              <Footer />
            </ErrorBoundary>
          </ToastProvider>
        </ThemeProvider>
      </SessionProvider>
    </ApolloProvider>
  );
}
