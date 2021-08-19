import React, { useState, useContext } from "react"
import { ChromePicker } from "react-color"
import { SettingsContext } from "../context/SettingsContext"

const AddColor = () => {
  const [color, setColor] = useState("white")
  const { colorSelection, setColorSelection } = useContext(SettingsContext)

  return (
    <>
      <div className="picker" >
        <ChromePicker
          header="Pick Colors"
          color={color}
          onChange={(newColor) => {
            setColor(newColor.hex)
          }}
        />
      </div>

      <div className="picker__button">
        <button
          className="button"
          onClick={() => {
            setColorSelection([...colorSelection, color])
            }}
        >
          Add Color
        </button>
      </div>
    </>
  )
}

export default AddColor
