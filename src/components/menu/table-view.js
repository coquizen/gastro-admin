import React from "react"
import MenuItem from "./menu-item"
import SectionItem from "./section-item"
const TableView = () => {
  return (
    <div className="table-view">
      <div className="__header">Details</div>
      <div className="__body">
        <div className="tree">
          <div className="branch">
            <SectionItem />
          </div>
          <div className="branch">
            <SectionItem value="Lunch" />
            <div className="leaf">
              <SectionItem value="Sandwiches" />
              <MenuItem value="MLT" />
            </div>
            <div className="leaf">
              <SectionItem value="Soups" />
              <MenuItem value="Split Pea Soup" />
            </div>
          </div>
          <div className="branch">
            <SectionItem value="Dinner" />
            <div className="leaf">
              <SectionItem value="Appetizer" />
              <MenuItem value="Croquettes" />
              <MenuItem value="Gaspacho" />
              <MenuItem value="Patata Brava" />
            </div>
            <div className="leaf">
              <SectionItem value="Main Course" />
              <MenuItem value="Paella" />
              <MenuItem value="Penne alla vodka" />
            </div>
            <div className="leaf">
              <SectionItem value="Dessert" />v
            </div>
          </div>
          <div className="branch">
            <SectionItem value="Breakfast" />
            <MenuItem value="Eggs Benedict" />
            <MenuItem value="French Toast" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default TableView
