import React from 'react';
import {NavLink} from 'react-router-dom';
const Navigation = ()=>{
    return (
        <div>
<NavLink to="/">Home</NavLink> | 
<NavLink to="/first">First</NavLink> | 
<NavLink to="/second">Second</NavLink> | 
<NavLink to="/third">Third</NavLink>
        </div>
    )
}

export default Navigation;