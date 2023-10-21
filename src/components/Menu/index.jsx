import './index.css'
import Drink from '../Drink'

const drinks = [
  {
    id: 1,
    "name": "Espresso",
    "ordered": false,
    "image": "/cups/espresso.png",
    "layers": [
      {
        "color": "rgb(97, 57, 22)",
        "label": "espresso"
      }
    ]
  },
  {
    id: 2,
    "name": "Doppio",
    "ordered": false,
    "image": "/cups/doppio.png",
    "layers": [
      {
        "color": "rgb(97, 57, 22)",
        "label": "espresso"
      }
    ]
  },
  {
    id: 3,
    "name": "Lungo",
    "ordered": false,
    "image": "/cups/lungo.png",
    "layers": [
      {
        "color": "rgb(176, 222, 225)",
        "label": "voda"
      },
      {
        "color": "rgb(97, 57, 22)",
        "label": "espresso"
      }
    ]
  }
]

export default () => (
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