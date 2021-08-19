import React, { useContext } from "react"
import { SettingsContext } from "../context/SettingsContext"

const SpeedRange = () => {
  const { speed, setSpeed } = useContext(SettingsContext)

  return (
    <div className="options">
      <label
        className="options__label"
        htmlFor="speed"
      >
        Speed
      </label>
      <input
        className="options__range"
        type="range"
        id="speed"
        name="speed"
        min="1"
        max="10"
        value={speed}
        onChange={(e) => {
          setSpeed(e.target.value)
        }}
      />
      <span className="options__text">
        {speed}
      </span>
    </div>
  )
}

export default SpeedRange
