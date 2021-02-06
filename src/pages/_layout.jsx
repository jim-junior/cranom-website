import React from 'react'
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';


const LayoutC = (prps) => {
    return (
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta name="msapplication-TileColor" content="#00aba9" />
            <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
            <meta name="theme-color" content="#3578e5"></meta>
        </Head>
    )
}

export default LayoutC
