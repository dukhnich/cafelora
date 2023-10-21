import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Menu from '../components/Menu';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const response = await fetch('http://localhost:4000/api/drinks');
const {result} = await response.json()

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main id="home">
      <Banner />
      <Menu drinks={result} />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);

const navBtn = document.querySelector('.nav-btn');
const navigation = document.querySelector('.rollout-nav');

const toggleNav = () => {
  if (navigation) {
    navigation.classList.toggle('nav-closed');
  }
}

if (navBtn) {
  navBtn.addEventListener('click', toggleNav);
}

if (navigation) {
  const navItems = navigation.querySelectorAll('a');
  navItems.forEach(item => item.addEventListener('click', toggleNav));
}

const drinksControls = document.querySelectorAll('.drink__controls');
drinksControls.forEach(coltrols => {
  const btn = coltrols.querySelector('.order-btn');
  const id = coltrols.querySelector('.drink-id')?.value;
  if (!(btn && id)) {
    return;
  }
  btn.addEventListener('click', async () => {
    const ordered = result.find(item => item.id === id)?.ordered
    await fetch(`http://localhost:4000/api/drinks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([{ 
        op: 'replace',
        path: '/ordered',
        value: !ordered,
      }]),
    });
    window.location.reload();
  })
})