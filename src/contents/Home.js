import React, { Component } from 'react';
import profilepic from '../img/p01.jpg';
import Social from '../components/Social';
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} alt="profile" className="profilepic" />
                <ReactTypingEffect text={['I am Achira', 'I want to be Web Developer']} speed={75} eraseDelay={200} className="typingeffect" />
                <Social />
            </div>
        );
    }
}

export default Home;