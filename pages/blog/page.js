import React from "react";
import Style from "../../components/styles";
import Link from "next/link";
import Router from "next/router";
import Pages from "../../components/blogPages";
import { Scrollbars } from "react-custom-scrollbars";

export default class extends React.Component {
  constructor(props) {
    super(props);
    var pageDiv;
    for (var i = 0; i < Pages.length; i++) {
      console.log(Pages[i]);
      console.log(Pages[i].url);
      console.log(this.props.url.query.page);
      if (this.props.url.query.page === Pages[i].url) {
        pageDiv = Pages[i].content;
      }
    }
    if (pageDiv === undefined) {
      pageDiv = (
        <div>
          <p>404 Blog Not Found</p>
        </div>
      );
    }
    console.log(pageDiv);
    this.state = {
      flex: "flex",
      page: pageDiv
    };
  }
  componentDidMount() {
    Router.prefetch("/");
  }
  handleChange = e => {};
  // Click events for fade out transition
  // ..whilst keeping next.js Router features
  handleClickInternal = e => {
    e.preventDefault();
    if (!e.target.href.includes(Router.asPath)) {
      Router.push({ pathname: e.target.href });
      this.setState({ flex: "flex faded" });
    }
  };
  handleClickExternal = e => {
    this.setState({ flex: "flex faded" });
  };
  render() {
    return (
      <div>
        <Style />
        <div className="bg">

          <div className={this.state.flex}>
            <div
              className="flex-blog"
              style={{ overflow: "hidden", height: "90vh" }}
            >

              <Scrollbars
                style={{ width: "100%", height: "100%", overflow: "hidden" }}
                universal
                renderThumbVertical={({ style, ...props }) =>
                  <div
                    {...props}
                    style={{
                      ...style,
                      backgroundColor: "#bbffe3",
                      width: "0.25em",
                      height: "0.25em"
                    }}
                  />}
              >
                <div className="flex-row">
                  {this.state.page}
                </div>
                <div className="flex-row">
                  <a
                    href="/blog"
                    style={{ lineHeight: "5em", textDecoration: "underline" }}
                    onClick={this.handleClickInternal}
                  >
                    Go Back
                  </a>
                </div>
              </Scrollbars>
            </div>

            <div className="flex-nav">
              <div style={{ width: "20em" }}>
                <div className="vertical-text">
                  <div className="flex-row">
                    <div className="boxed">
                      &gt;/usr/mooku/home/blog/
                    </div>
                    <div className="thirdBoxed">
                      <a href="/" onClick={this.handleClickInternal}>/home/</a>
                    </div>
                    <div className="thirdBoxed">
                      <a href="/blog" onClick={this.handleClickInternal}>
                        /blog/
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
