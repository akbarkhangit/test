import React from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';


const defaultDescription = '';
const defaultOGURL = '';
const defaultOGImage = '';

const Head = props => (

  <NextHead>
    <meta charSet="UTF-8" />
    <title>Neighbor2Neighbor: Counting the Ways City Policies Impact Portlanders Experiencing Houselessness, Jan 6 2019</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {/* <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" /> */}
    <link rel="icon" type="image/png" href="./static/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="./static/favicon-16x16.png" sizes="16x16" />

    <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic" rel="stylesheet" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossOrigin="anonymous" />

    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700" rel="stylesheet" />
    <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />

    {/* <link rel="preload" href="./static/05_timeline_02.jpg" /> */}


    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ''} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
};

export default Head;
