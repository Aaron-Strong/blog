import React from "react";
import Style from "../components/styles";
import Link from "next/link";
import Router from "next/router";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flex: "flex",
      discord: "/Discord/",
      discordClass: ""
    };
  }

  componentDidMount() {
    if (
      // If using IE
      localStorage.getItem("alerted") != "true" &&
      (navigator.appName == "Microsoft Internet Explorer" ||
        !!(
          navigator.userAgent.match(/Trident/) ||
          navigator.userAgent.match(/rv:11/)
        ))
    ) {
      alert(
        "This doesn't work on IE, and I have no plans to make it work. Please stop using IE. (This message won't pop up again.)"
      );
      localStorage.setItem("alerted", true);
      // Do Firefox-related activities
    }
    Router.prefetch("/about");
    Router.prefetch("/blog");
  }
  handleChange = e => {};
  handleClickDiscord = e => {
    e.preventDefault();
    var text;
    if (this.state.discord == "Mooku#3883") {
      text = "/Discord/";
    } else {
      text = "Mooku#3883";
    }
    this.setState({ discordClass: "faded" });
    this.timer = setTimeout(_ => {
      this.setState({ discord: text });
      this.setState({ discordClass: "" });
    }, 500);
  };
  handleClickInternal = e => {
    e.preventDefault();
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
            <div className="box-container">
              <div className="flex-row">
                <div className="boxed">&gt;/usr/mooku/home/</div>
              </div>
              <div className="flex-row">
                <div className="boxed">
                  <a href="/portfolio" onClick={this.handleClickInternal}>
                    /Portfolio/
                  </a>
                </div>
              </div>
              <div className="flex-row">
                <div className="halfBoxed">
                  <a href="/blog" onClick={this.handleClickInternal}>/Blog/</a>
                </div>
                <div className="halfBoxed">
                  <a href="/about" onClick={this.handleClickInternal}>
                    /About/
                  </a>
                </div>
              </div>
              <div className="flex-row">
                <div className="thirdBoxed">
                  <a
                    href="https://github.com/MilkyMiku"
                    onClick={this.handleClickExternal}
                  >
                    /Github/
                  </a>
                </div>
                <div className="thirdBoxed">
                  <a
                    href="https://twitter.com/MookuDesu"
                    onClick={this.handleClickExternal}
                  >
                    /Twitter/
                  </a>
                </div>
                <div className="thirdBoxed">
                  <a
                    className={this.state.discordClass}
                    onClick={this.handleClickDiscord}
                  >
                    {this.state.discord}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
