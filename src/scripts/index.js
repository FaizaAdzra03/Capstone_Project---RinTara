import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/ProvinceDetail.css';
import '../styles/home-page.css';
import '../styles/responsive.css';
import './components/app-bar';
import './components/hero-element';
import './components/skip-to-content';
import './components/footer';

import App from './views/app';
// import initSlider from './utils/scrollHandler';

const app = new App({
    button: document.querySelector('#hamburger'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('#mainContent'),
  });
  
  window.addEventListener('hashchange', () => {
    app.renderPage();
  });
  
  // window.addEventListener("resize", () => {
  //   initSlider();
  // });

  window.addEventListener('load', () => {
    app.renderPage();
    // initSlider();
  });

