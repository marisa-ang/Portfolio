import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="AAS Web Development" where="Wake Tech CC" from="July 2018" to="Present"/>
            </div>
            )
        }
    }
    
export default Education
    