import React from "react"
import TableView from "../components/menu/table-view"
import TreeView from "../components/menu/tree-view"
const Menu = () => {
  return (
    <div className="menu-canvas">
      <TreeView />
      <TableView />
    </div>
  )
}

export default Menu
