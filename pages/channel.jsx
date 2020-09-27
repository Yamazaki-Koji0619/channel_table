import React, { useContext } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { SiteContext } from './_app';

const Channel = () => {

    const { state, dispatch } = useContext(SiteContext);

    console.log(state.channel);
    console.log("こんにちは");

    return(
        <>
            <Head>
                <title>番組表 - cyberagent-</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="../styles/reset.css"/>
            </Head>
            <Header />
        </>
    )
};

export default Channel;