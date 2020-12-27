import React from "react"

const NodeBranchHeader = ({ title }) => {
  return (
    <div className="node-header">
      <button className="btn">
        <i className="fas fa-grip-vertical fw"></i>
      </button>
      <input type="text" className="node-input" value={title} />
    </div>
  )
}

export default NodeBranchHeader
