import React from "react"
import Style from '../../components/styles'
import Link from "next/link"
import Router from "next/router"
import {helloWorld} from "../../components/blogPages"
const HelloWorld = helloWorld.content



export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            flex: "flex",
            blogPages: []
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
                        <div className="flex-blog">
                            <div style={{width: "30em"}}>
                                <div className="flex-row">
                                    <HelloWorld/>
                                </div>
                                <div className="flex-row">
                                    <a href="/blog" style={{lineHeight: "5em", textDecoration: "underline"}} onClick={this.handleClickInternal}>Go Back</a>
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