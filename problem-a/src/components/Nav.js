import React from 'react'; //import React Component
import { NavLink } from 'react-router-dom';


export function AboutNav() {
  return (
    <nav id="aboutLinks">
      <h2>About</h2>
      <ul className="list-unstyled">
        <li><NavLink href="/adopt">Adopt a Pet</NavLink></li>
        <li><NavLink href="/about">About Us</NavLink></li>
        <li><NavLink href="/resources">Resources</NavLink></li>
      </ul>
    </nav>
  );
}