import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Links = () => (
  <div>
    <nav>
      <ul>
        <li><Link to='/'>Audience</Link></li>
        <li><Link to='/speaker'>Speaker</Link></li>
        <li><Link to='/board'>Board</Link></li>
      </ul>
    </nav>
  </div>
)

export default Links
