/* eslint-disable */
import React from 'react';
import Head from 'next/head';

export default () => (
  <header>
    <Head>
      <title>Mooku.me</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      <style>{`
        html, body {
          width: 100%;
          height: 100vh;
          background: rgba(19, 19, 19, 1) 100%;
          color: #fff;
          font-family: monospace;
          font-size: 18px;
          padding: 0px;
          margin: 0px;
        }
        .boxed {
          border: 1px solid #bbffe3;
          margin: auto;
          text-align: center;
          padding: 10px;
          width: 100%;
        }
        .halfBoxed {
          border: 1px solid #bbffe3;
          margin: auto;
          text-align: center;
          padding: 10px;
          width: 50%;
        }
        .thirdBoxed {
          border: 1px solid #bbffe3;
          margin: auto;
          text-align: center;
          padding: 10px;
          width: 33%
        }
        a:link {
            color: inherit;
            text-decoration: none;
        }
        a:visited {
            color: inherit;
            text-decoration: none;
        }
        a:hover {
            color: grey;
            cursor: pointer;
            text-decoration: none;
            -webkit-transition: color 0.5s;
            -moz-transition: color 0.5s;
            -ms-transition: color 0.5s;
            -o-transition: color 0.5s;
            transition: color 0.5s;
        }
        a:active {
            color: grey;
            text-decoration: none;
        }
        .flex {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
          width: 100%;
          height: 100vh;
          overflow-y: hidden;
        }
        .flex-blog {
          display: flex;
          align-items: center;
          flex-direction: column;
          width: 95%;
          line-height: 25px;
          height: 80%;
          overflow-y: hidden;
          z-index: 999;
        }
        .flex-nav {
          display: flex;
          justify-content: center;
          position: fixed;
          align-items: flex-start;
          flex-direction: column;
          width: 100%;
          // height: 100vh;
        }
        .bg {
          background: rgba(19, 19, 19, 1) 100%;
          -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
          -moz-animation: fadein 2s; /* Firefox < 16 */
          -ms-animation: fadein 2s; /* Internet Explorer */
          -o-animation: fadein 2s; /* Opera < 12.1 */
          animation: fadein 2s;
        }
        .box-container{
          width: 20em
        }
        .vertical-text {
          transform: rotate(-90deg);
          transform-origin: 0 100%;
          // position: absolute;
          line-height: 25px;
          // font-size: 14px;
          height: 0px;
          // width: 100%;
          // left: 30px;
          // bottom: 0;
          padding: 100% 0px 0px 0px;
        }
        .blog-border {
          border-left: 1px dashed white;
          border-right: 1px dashed white;
          width: 20em;
          min-height: 42em;
        }
        @-webkit-keyframes faded {
          0% {opacity:1;}
          100% {opacity:0;}
        }
        @keyframes faded {
            0% {opacity:1;}
            100% {opacity:0;}
        }
        .notFaded {
          opacity: 100;
        }
        .faded {
          opacity:0;
          -webkit-animation: faded 0.4s linear;
          -moz-animation   : faded 0.4s linear;
          -ms-animation    : faded 0.4s linear;
          -o-animation:    : faded 0.4s linear;
          animation        : faded 0.4s linear;
        }
        .flex-row {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
          text-align: center;
        }
        pre {
          white-space: pre-wrap;       /* css-3 */
          white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
          white-space: -pre-wrap;      /* Opera 4-6 */
          white-space: -o-pre-wrap;    /* Opera 7 */
          word-wrap: break-word;       /* Internet Explorer 5.5+ */
        }
        @keyframes fadein {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        /* Firefox < 16 */
        @-moz-keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }
        /* Safari, Chrome and Opera > 12.1 */
        @-webkit-keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }
        /* Internet Explorer */
        @-ms-keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }
        /* Opera < 12.1 */
        @-o-keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }



        @media only screen and (max-width: 768px) {
          // Mobile
          [class*="box-container"] {
              width: 100%;
              height: 100%;
          }
          .flex-blog {
            height: 100%;
            width: 100%;
          }
          .blog-border {
            border-left: none;
            border-right: none;
            width: 100%;
            height: 100%;
            min-height: 0;
          }
          .flex-nav {
            display: none;
            justify-content: center;
            position: fixed;
            align-items: flex-start;
            flex-direction: column;
            width: 100%;
            // height: 100vh;
          }
          .flex-row {
            width: 100%;
          }
          html, body {
            font-size: 100%;
            word-wrap: break-word;
            overflow: auto;
            overflow-wrap: break-word;
          }
          p{
            word-wrap: break-word;
            overflow: auto;
            overflow-wrap: break-word;
            width: 100%;
            max-width: 100%;
          }
          .hoverhand{
            cursor: pointer;
          }
}
      `}</style>
    </Head>
  </header>
);
