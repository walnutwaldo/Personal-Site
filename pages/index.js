import Head from 'next/head';
import React from 'react';

import App from '../components/App';

function Header() {
    return (<Head>
        <meta charSet="utf-8"/>
        <link rel="icon" href="./favicon.ico"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="theme-color" content="#000000"/>
        <meta
            name="description"
            content="Walden Yan's personal website"
        />
        <link rel="manifest" href="./manifest.json"/>

        <title>Walden Yan</title>
    </Head>);
}

function Home() {
    return (<div>
        <Header/>
        <App/>
    </div>);
}

export default Home;