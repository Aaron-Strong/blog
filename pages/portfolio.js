import React from "react";
import Style from "../components/styles";
import Link from "next/link";
import Router from "next/router";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flex: "flex"
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

            <div className="flex-blog" style={{ justifyContent: "center" }}>
              <div>
                <div className="flex-row">
                  <p>Will be adding projects here very soon..</p>
                </div>
                <div className="flex-row">
                  <a
                    href="https://github.com/MilkyMiku/"
                    onClick={this.handleClickExternal}
                  >
                    Until then feel free to check out my github here!
                  </a>
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
