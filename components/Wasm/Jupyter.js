// provides an iFrame to the Jupyterlite page https://dhri-curriculum.github.io/jupyterlite/repl/index.html?kernel=python
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Jupyter(props) {


    return (
        <>
            <Head>
                <script src='../coi-service.js' async></script>
            </Head>
            <div>
                <iframe src={'../../jupyterlite/repl/index.html?kernel=python'}
                    width='100%' height='100%' />
            </div>
        </>
    )

}