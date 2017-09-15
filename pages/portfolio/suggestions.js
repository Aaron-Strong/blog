import React from 'react';
import Style from '../../components/styles';
import Link from 'next/link';
import Router from 'next/router';
import suggestions from '../../utils/suggestions';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flex: 'flex',
      suggestion: ''
    };
  }
  componentDidMount() {
    Router.prefetch('/');

    this.setState({ suggestion: suggestions() });
  }
  handleChange = e => {};
  // Click events for fade out transition
  // ..whilst keeping next.js Router features
  handleClickInternal = e => {
    e.preventDefault();
    if (!e.target.href.includes(Router.asPath)) {
      Router.push({ pathname: e.target.href });
    }
  };
  handleClickExternal = e => {
    this.setState({ flex: 'flex faded' });
  };
  render() {
    return (
      <div>
        <Style />
        <div className="bg">
          <div className={this.state.flex}>
            <div className="flex-blog" style={{ justifyContent: 'center' }}>
              <div>
                <div className="flex-row">
                  <p>You should make a {this.state.suggestion}</p>
                </div>
                <div className="flex-row">
                  <a
                    className="hover-hand"
                    onClick={() => {
                      this.setState({ suggestion: suggestions() });
                    }}
                    style={{
                      textDecoration: 'underline'
                    }}
                  >
                    Make a new suggestion?
                  </a>
                </div>
              </div>
            </div>

            <div className="flex-nav">
              <div style={{ width: '20em' }}>
                <div className="vertical-text">
                  <div className="flex-row">
                    <div className="boxed">&gt;/usr/mooku/home/portfolio/</div>
                    <div className="thirdBoxed">
                      <a href="/" onClick={this.handleClickInternal}>
                        /home/
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
