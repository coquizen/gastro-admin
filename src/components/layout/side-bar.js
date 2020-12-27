import { Link } from "gatsby"
import React from "react"

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-link">
        <Link to="/">
          <i className="fas fa-home fa-fw"></i>
        </Link>
      </div>
      <div className="sidebar-link">
        <Link to="/menu">
          <i className="fas fa-clipboard fa-fw"></i>
        </Link>
      </div>
      <div className="sidebar-link">
        <Link to="/settings">
          <i className="fas fa-cog fa-fw"></i>
        </Link>
      </div>
    </div>
  )
}

export default SideBar
