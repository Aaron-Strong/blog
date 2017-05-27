import React from "react";
import Style from "../components/styles";
import Link from "next/link";
import Router from "next/router";
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flex: "flex",
      blogPages: []
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
    Router.push({ pathname: e.target.href });
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
              <div
                style={{
                  borderLeft: "1px dashed white",
                  borderRight: "1px dashed white",
                  width: "20em",
                  minHeight: "42em"
                }}
              >
                <div className="flex-row">
                  <a
                    onClick={this.handleClickInternal}
                    style={{ lineHeight: "50px" }}
                    href="/blog/page"
                  >
                    Hello World
                  </a>
                </div>
                {this.state.blogPages}
                <div className="flex-row">
                  <p>More Coming Soon™</p>
                </div>
              </div>
            </div>

            <div className="flex-nav">
              <div style={{ width: "20em" }}>
                <div className="vertical-text">
                  <div className="flex-row">
                    <div className="boxed">
                      &gt;/usr/mooku/home/about/
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
