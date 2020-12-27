import React from "react"

const SectionItem = ({ value }) => {
  return (
    <div className="node">
      <button type="button" className="btn disabled">
        <i className="fas fa-image fw"></i>
      </button>
      <input
        placeholder="Type section name, e.g. Dinner or Appetizer"
        className="node-input"
        type="text"
        value={value}
      />
      <div className="btn-group btn-group-sm ms-auto" role="group">
        <button type="button" className="btn">
          <i className="fas fa-dot-circle fw"></i>
        </button>
        <button type="button" className="btn">
          <i className="fas fa-edit fw"></i>
        </button>
        <button type="button" className="btn">
          <i className="fas fa-ellipsis-h fw"></i>
        </button>
      </div>
    </div>
  )
}

export default SectionItem
