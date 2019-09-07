import React from 'react'
import './layout.css'
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom'
class Header extends React.Component{
  render(){
    return (
      <div className="navbar">
      <div className="container">
         <h1 className="logo">Redux</h1>
         <ul className="nav">
            <li><Link to= '/'>Home</Link></li>
            <li><Link to='/post'>Add</Link></li>
         </ul>
      </div>
      </div>
    );
  }
}
export default Header;
