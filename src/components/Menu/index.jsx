import './index.css'
import Drink from '../Drink'

export default ({drinks}) => (
<section id="menu" className="menu">
  <div className="container">
    <h2>Naše nabídka</h2>
    <p className="menu-intro">
      Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
    </p>
    <div className="drinks-list">
      {drinks.map((drink) => <Drink {...drink} key={drink.id} />)}
    </div>

    <div className="order-detail">
      <a href="/order.html">Detail objednávky</a>
    </div>
  </div>
</section>

)