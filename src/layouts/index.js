import React from "react"
import "../../assets/scss/admin.scss"
import Header from "../components/layout/header"
import SideBar from "../components/layout/side-bar"

const Layout = ({ children }) => {
  return (
    <div className="app-wrapper wrapper">
      <SideBar />
      <div className="page">
        <div className="page__header">
          <Header />
        </div>
        <div className="page__body">{children}</div>
      </div>
    </div>
  )
}

export default Layout
