// Vendor initialization: import vendor libraries and expose globals for the legacy theme script
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import GLightbox from 'glightbox';
import imagesLoaded from 'imagesloaded';
import Isotope from 'isotope-layout';
import Swiper from 'swiper';

// Expose to window so the copied theme script can use the same globals
if (typeof window !== 'undefined') {
  window.AOS = AOS;
  window.GLightbox = GLightbox;
  window.imagesLoaded = imagesLoaded;
  window.Isotope = Isotope;
  window.Swiper = Swiper;
  // PureCounter is intentionally left as optional: the legacy vendor
  // script (public/assets/vendor/purecounter) can be included separately
  // if you want the counter functionality. The theme's main.js guards
  // against absence of PureCounter.
}

// Import the legacy theme logic (copied into src) which expects the globals above
import './assets/js/main.js';
