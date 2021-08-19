import React, { useContext } from "react"
import { SettingsContext } from "../context/SettingsContext"

const Colors = () => {
  const { colorSelection, setColorSelection } = useContext(SettingsContext)

  const onDelete = (deleteColor) => {
    setColorSelection(colorSelection.filter((color) => color !== deleteColor))
  }

  return (
    <div className="colors">
      {colorSelection.map((color) => (
        <div
          key={color}
          className="colors__item"
          style={{
            background: color,
          }}
        >
          <button
            className="button__delete"
            onClick={() => onDelete(color)}
          >
            ×
          </button>
        </div>
      ))}
    </div>
  )
}

export default Colors
