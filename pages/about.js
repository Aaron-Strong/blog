import React from "react"
import Style from '../components/styles'
import Link from "next/link"
import Router from "next/router"

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            flex: "flex"
        }
    };
    componentDidMount() {
        Router.prefetch('/')
    }
    handleChange = (e) => { 
        
    };
    // Click events for fade out transition
    // ..whilst keeping next.js Router features
    handleClickInternal = (e) => { 
        e.preventDefault();
        if(!e.target.href.includes(Router.asPath)) {
            Router.push({pathname: e.target.href})
            this.setState( {flex: "flex faded"} )
        }
    };
    handleClickExternal = (e) => { 
        this.setState({flex: "flex faded"})
    };
    render() {
        return (
            <div>
                <Style />
                <div className="bg">

                    <div className={this.state.flex}>

                        <div className="flex-blog" style={{justifyContent: "center"}}>
                            <div>
                                <div className="flex-row">
                                    <p>Made By Mooku Using...</p>
                                </div>
                                <div className="flex-row">
                                    <ul>
                                        <li><a href="https://github.com/zeit/next.js/" onClick={this.handleClickExternal}>Next.js</a></li>
                                        {/* TODO: Add things used here! */}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="flex-nav">
                            <div style={{width: "20em"}}>
                                <div className="vertical-text">
                                    <div className="flex-row">
                                        <div className="boxed">
                                        >/usr/mooku/home/about/
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
        )
    };
};