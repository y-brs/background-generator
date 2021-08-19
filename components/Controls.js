import Colors from "./Colors"
import AddColor from "./AddColor"
import AngleRange from "./AngleRange"
import SpeedRange from "./SpeedRange"
import Random from "./Random"

const Controls = () => (
  <div className="controls">
    <Colors />
    <AddColor />
    <AngleRange />
    <SpeedRange />
    <Random />
  </div>
)

export default Controls
