/* eslint-disable */
import React from "react"
import Head from "next/head"

export default () => (
  <header>
    <Head>
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
        .flex-home {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 100%;
          height: 100vh;
        }
        .flex-page {
          display: flex;
          justify-content: center;
          position: fixed;

          align-items: flex-start;
          flex-direction: column;
          width: 100%;
          height: 100vh;
        }
        .bg {
          background: rgba(19, 19, 19, 1) 100%;
          background-repeat: no-repeat;
          background-size: 1000% 1000%;
          -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
          -moz-animation: fadein 2s; /* Firefox < 16 */
          -ms-animation: fadein 2s; /* Internet Explorer */
          -o-animation: fadein 2s; /* Opera < 12.1 */
          animation: fadein 2s;
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
        @-webkit-keyframes faded {
          0% {opacity:1;}
          100% {opacity:0;}
        }
        @keyframes faded {
            0% {opacity:1;}
            100% {opacity:0;}
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
      `}</style>
    </Head>
  </header>
)