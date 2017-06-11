import React from "react";
import Style from "../components/styles";
import Link from "next/link";
import Router from "next/router";
import Pages from "../components/blogPages";
import { Scrollbars } from "react-custom-scrollbars";

export default class extends React.Component {
  constructor(props) {
    super(props);
    var blogPages = [];
    for (var page = 0; page < Pages.length; page++) {
      blogPages.push({
        name: Pages[page].name,
        url: Pages[page].url,
        key: page
      });
    }
    this.state = {
      flex: "flex",
      blogPages: blogPages
    };
  }

  componentDidMount() {
    Router.prefetch("/blog/page");
  }
  handleChange = e => {};
  // Click events for fade out transition
  // ..whilst keeping next.js Router features
  handleClickInternal = e => {
    e.preventDefault();
    console.log(e.target.href);
    Router.push(e.target.href);
    this.setState({ flex: "flex faded" });
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

            <div className="flex-blog">
              <div className="blog-border">
                <Scrollbars
                  universal
                  autoHeight
                  autoHeightMax="42em"
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
                    <a
                      href="/"
                      style={{ lineHeight: "5em", textDecoration: "underline" }}
                      onClick={this.handleClickInternal}
                    >
                      Go Back
                    </a>
                  </div>
                  {this.state.blogPages.map(page => {
                    return (
                      <div key={page.key} className="flex-row">
                        <a
                          onClick={this.handleClickInternal}
                          style={{ lineHeight: "60px" }}
                          href={"/blog/page?page=" + page.url}
                        >
                          {page.name}
                        </a>
                      </div>
                    );
                  })}
                  <div className="flex-row">
                    <p style={{ color: "grey" }}>More Coming Soon™</p>
                  </div>
                </Scrollbars>
              </div>
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
