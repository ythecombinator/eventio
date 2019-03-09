import React, {FunctionComponent} from 'react';
import Head from 'next/head';

import {GlobalStyles, MainView} from './style';

interface Props {
  name: string;
  title: string;
  type?: string;
  headerGap?: boolean;
  fullScreen?: boolean;
  openGraph?: {
    locale: string;
    title: string;
    description: string;
    imageWidth: number;
    imageHeight: number;
  };
  twitter?: {
    handle: string;
    cardType: string;
  };
}

const Page: FunctionComponent<Props> = (props) => {
  const {children, title, headerGap, fullScreen} = props;

  return (
    <div>
      <GlobalStyles />
      <MainView headerGap={headerGap} fullScreen={fullScreen}>
        <Head>
          <title>Eventio | {title}</title>
          <meta property="og:title" content={title} />
          <meta property="og:site_name" content="Eventio" />
          <meta property="og:url" content="www.strv.com/eventio" />
          <meta property="og:description" content="Site for events" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="www.eventio.image.com" />
        </Head>
        {children}
      </MainView>
    </div>
  );
};

Page.defaultProps = {
  headerGap: true,
  fullScreen: false,
  title: 'Eventio',
  type: 'website',
  openGraph: {
    locale: 'en',
    title: 'Eventio',
    description: 'Create and share events.',
    imageWidth: 1200,
    imageHeight: 1200,
  },
  twitter: {
    handle: '@ythecombinator',
    cardType: 'summary_large_image',
  },
};

export default Page;
