import React from 'react'
import {NavLink } from 'react-router-dom';

export default function WebIntro() {
  return (
    <div>
        <p>WebIntro</p>
        <NavLink to="/login">login</NavLink>
    </div>
  )
}
