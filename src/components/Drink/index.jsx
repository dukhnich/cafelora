import './index.css'
import Layer from '../Layer'

export default ({name, ordered, image, layers, id}) => (
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
      <input className="drink-id" type='hidden' value={id} />
      <input className="drink-ordered" type='hidden' value={ordered} />
      <button className={ordered ? 'order-btn order-btn--ordered' : 'order-btn'}>
        {ordered ? 'Zrušit' : 'Objednat'}
      </button>
    </div>
  </div>
)