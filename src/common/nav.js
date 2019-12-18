import React from 'react'
import {
    Link
} from "react-router-dom";
export default function Nav() {
  return (
    <div>
      <nav>
          <ul>
            <li>
              <Link to="/backend">Backend</Link>
            </li>
            <li>
              <Link to="/front-end">Front</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}
