import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/me.png';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['Hello, my name is Marisa!','I am a web designer.']} speed={100} eraseDelay={900}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    