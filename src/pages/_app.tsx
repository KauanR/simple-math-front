import Head from 'next/head'
import '../styles/main.scss'

export default function App({Component, pageProps}) {
    return <>
        <Head>
            <title>Simple Math</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        </Head>
        <Component {...pageProps} />
    </>
}