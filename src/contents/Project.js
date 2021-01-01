 import React, { Component } from 'react'
 import Widecard from '../components/Widecard';

 class Project extends Component {
     render() {
         return(
             <div className="condiv">
                 <h1 className="subtopic">My Education</h1>
                 <Widecard title="Program: Sci - Math" where="Assumption College Sriracha" from="2005" to="Present" />
                 <Widecard title="Web Development" where="Youtube Udemy Medium" from="2020" to="Present" />
             </div>
         );
     }
 }
 
 export default Project;