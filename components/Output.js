import React, { useContext, useState } from "react"
import { SettingsContext } from "../context/SettingsContext"

const Output = () => {
  const [copied, setCopied] = useState(false)

  const { colorSelection, speed, angle } = useContext(SettingsContext)

  const background =
    "linear-gradient(" + angle + "deg," + colorSelection.toString() + ")"

  const backgroundSize =
    colorSelection.length * 60 + "%" + " " + colorSelection.length * 60 + "%"

  const animation =
    "gradient-animation " +
    colorSelection.length * Math.abs(speed - 11) +
    "s ease infinite"

  const code = `.gradient-background {
  background: ${background};
  background-size: ${backgroundSize};
  animation: ${animation};
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}`

  return (
    <div className="output">
      <pre className="output__code">
        <code>{code}</code>

        <button className="output__button button"
          onClick={() => {
            setCopied(true)
            navigator.clipboard.writeText(code)
          }}
        >
          {copied ? "copied" : "copy css"}
        </button>
      </pre>
    </div>
  )
}

export default Output
