import React, { useContext } from "react"
import { SettingsContext } from "../context/SettingsContext"

const AngleRange = () => {
  const { angle, setAngle } = useContext(SettingsContext)

  return (
    <div className="options">
      <label
        className="options__label"
        htmlFor="angle"
      >
        Angle
      </label>
      <input
        className="options__range"
        type="range"
        id="angle"
        name="angle"
        min="0"
        max="360"
        value={angle}
        onChange={(e) => {
          setAngle(e.target.value)
        }}
      />
      <span className="options__text">
        {angle} deg
      </span>
    </div>
  )
}

export default AngleRange
