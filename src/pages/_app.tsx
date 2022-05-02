import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/system'
import Head from 'next/head'
import Header from '../core/components/header'
import '../styles/main.scss'

export default function App({Component, pageProps}) {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                light: '#9c47ff',
                main: '#6002EE',
                dark: '#311b92',
                contrastText: '#FFF'
            },
            secondary: {
                light: '#4ebaaa',
                main: '#00897b',
                dark: '#005b4f',
                contrastText: '#000'
            }
        }
    })

    return (
        <>
            <Head>
                <title>Simple Math</title>
            </Head>
            <ThemeProvider theme={darkTheme}>
                <Header></Header>
                <main>
                    <Component {...pageProps} />
                </main>
            </ThemeProvider>
        </>
    ) 
    
}