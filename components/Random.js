import React, { useContext } from "react"
import { SettingsContext } from "../context/SettingsContext"

const Random = () => {
  const { setColorSelection, setAngle, setSpeed } = useContext(SettingsContext)

  const goRandom = () => {
    const numColors = 3 + Math.round(Math.random() * 3)
    const colors = [...Array(numColors)].map(() => {
      return "#" + Math.floor(Math.random() * 16777215).toString(16)
    })
    setColorSelection(colors)
    setAngle(Math.floor(Math.random() * 361))
    setSpeed(Math.floor(Math.random() * 10) + 1)
  }

  return (
    <div className="random">
      <button
        className="button__random button"
        onClick={goRandom}
      >
        RANDOM color
      </button>
    </div>
  )
}

export default Random
