import React from "react"
import Style from '../components/styles'
import Link from "next/link"
import Router from "next/router"

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            flex: "flex",
            discord: "/Discord/",
            discordClass: ""
        }
    };

    componentDidMount() {
        
        if((localStorage.getItem("alerted") != "true") && !(navigator.userAgent.toLowerCase().indexOf('chrome') > -1)){
            alert("This looks bad on anything but chromium/webkit based browsers right now, I'm sorry and will be working on a fix soon™")
            localStorage.setItem("alerted", true)
            // Do Firefox-related activities
        }
        Router.prefetch('/about');
        Router.prefetch('/blog');
    }
    handleChange = (e) => { 
        
    };
    handleClickDiscord = (e) => {
        e.preventDefault();
        var text;
        if(this.state.discord == "Mooku#3883"){
            text = "/Discord/"
        }
        else {
            text = "Mooku#3883"
        }
        this.setState({discordClass: "faded"});
        this.timer = setTimeout(_ => {
            this.setState({discord: text});
            this.setState({discordClass: ""})
        }, 500)
    }
    handleClickInternal = (e) => { 
        e.preventDefault();
        Router.push({pathname: e.target.href})
        this.setState( {flex: "flex faded"} )
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
                                    <a className={this.state.discordClass}  onClick={this.handleClickDiscord}>{this.state.discord}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};