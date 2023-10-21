import './index.css'
import Layer from '../Layer'

export default ({name, ordered, image, layers}) => (
  <div className="drink">
    <div className="drink__product">
      <div className="drink__cup">
        <img src={`http://localhost:4000${image}`} />
      </div>
      <div className="drink__info">
        <h3>{name}</h3>
        {layers.map((layer, i) => <Layer {...layer} key={i} />)}
      </div>
    </div>
    <div className="drink__controls">
      <button className="order-btn">
        Objednat
      </button>
    </div>
  </div>
)