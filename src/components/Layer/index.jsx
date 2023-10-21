import './index.css'

export default ({color, label}) => (
    <div className="layer">
      <div className="layer__color" style={{ backgroundColor: color }}></div>
      <div className="layer__label">{label}</div>
    </div>
)