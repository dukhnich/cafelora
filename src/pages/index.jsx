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