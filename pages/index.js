import React from "react"
import Style from '../components/styles'
import Link from "next/link"
import Router from "next/router"

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            flex: "flex-home"
        }
    };

    handleChange = (e) => { 
        
    };
    handleClickInternal = (e) => { 
        e.preventDefault();
        console.log("moo")
        Router.push({pathname: e.target.href})
        this.setState( {flex: "flex-home faded"} )
    };
    handleClickExternal = (e) => { 
        this.setState({flex: "flex-home faded"})
    };
    render() {
        return (
            <div>
                <Style />
                <div className="bg">
                    <div className={this.state.flex}>
                        <div style={{width: "20em"}}>
                            <div className="flex-row">
                                <div className="boxed">>/usr/mooku/home/</div>
                            </div>
                            <div className="flex-row">
                                <div className="halfBoxed">
                                    <a href="/blog" onClick={this.handleClickInternal}>/Blog/</a>
                                </div>
                                <div className="halfBoxed">
                                    <a href="/about" onClick={this.handleClickInternal}>/About/</a>
                                </div>
                            </div>
                            <div className="flex-row">
                                <div className="thirdBoxed">
                                    <a href="https://github.com/MilkyMiku" onClick={this.handleClickExternal}>/Github/</a>
                                </div>
                                <div className="thirdBoxed">
                                    <a href="https://twitter.com/MookuDesu" onClick={this.handleClickExternal}>/Twitter/</a>
                                </div>
                                <div className="thirdBoxed">
                                    <a href="https://discord.gg/NZTHmsk" onClick={this.handleClickExternal}>/Discord/</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};