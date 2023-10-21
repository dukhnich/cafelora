import './index.css'
import OrderItem from '../Order item'

export default ({items}) => (
  <div className="order__content container">
      <h1>Vaše objedávnka</h1>
      {
        items && items.length ? (
          <div className="order__items">
            {items.map((item) => <OrderItem {...item} key={item.id} />)}
          </div>
        ) : (
          <p className="empty-order">Zatím nemáte nic objednáno</p>
        ) 
      }
    </div>
)