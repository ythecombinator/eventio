import {FunctionComponent} from 'react';
import Head from 'next/head';

const Meta: FunctionComponent = () => (
  <Head>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    <link rel="icon" href="/static/favicon.ico" />
    <link href="https://fonts.googleapis.com/css?family=Hind:400,600" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet" />
  </Head>
);

export default Meta;
