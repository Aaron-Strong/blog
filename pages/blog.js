import React from "react"
import Style from '../components/styles'
import Link from "next/link"
import Router from "next/router"
import {helloWorld} from "../components/blogPages"
console.log(helloWorld)
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
        Router.prefetch('/blog/page')
    }
    handleChange = (e) => { 
        
    };
    // Click events for fade out transition
    // ..whilst keeping next.js Router features
    handleClickInternal = (e) => { 
        e.preventDefault();
            Router.push({pathname: e.target.href})
            this.setState( {flex: "flex faded"} )
    };
    handleClickExternal = (e) => { 
        this.setState({flex: "flex faded"})
    };
    render() {
        for(var i = 0; i < 26; i++){
            this.state.blogPages.push(<div className="flex-row"><a style={{lineHeight: "50px"}} href={"/" + i} key={i}>{i}</a></div>) 
        }
        return (
            <div>
                <Style />
                <div className="bg">

                    <div className={this.state.flex}>

                        <div className="flex-blog">
                            <div style={{borderLeft: "1px dashed white", borderRight: "1px dashed white", width: "20em"}}>
                                    <div className="flex-row"><a style={{lineHeight: "50px"}} href="/blog/page" onClick={this.props.onClickInternal}>Hello World</a></div>
                                    {this.state.blogPages}
                                <div className="flex-row">
                                    <p>Soon™</p>
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