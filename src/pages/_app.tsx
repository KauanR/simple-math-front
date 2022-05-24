import { ThemeProvider } from '@mui/system'
import Head from 'next/head'
import '../styles/main.scss'
import customTheme from 'src/core/theme'

export default function App({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>Simple Math</title>
                <link rel="icon" type="image/png" href="/favicon.ico" />
            </Head>
            <main>
                <ThemeProvider theme={customTheme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </main>
        </>
    ) 
    
}