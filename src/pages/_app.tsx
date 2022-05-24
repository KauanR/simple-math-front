import { ThemeProvider } from '@mui/system'
import Head from 'next/head'
import '../styles/main.scss'
import customTheme from 'src/core/theme'

export default function App({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>Simple Math</title>
            </Head>
            <main>
                <ThemeProvider theme={customTheme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </main>
        </>
    ) 
    
}