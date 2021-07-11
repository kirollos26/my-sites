// start typewriter
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }
  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];
    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    // Initial Type Speed
    let typeSpeed = 300;
    if (this.isDeleting) {
      typeSpeed /= 2;
    }
    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }
    setTimeout(() => this.type(), typeSpeed);
  }
}
// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);
// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}
// end typewriter

// start map
let map;
      function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: 30.045322, lng: 31.218692 },
          zoom: 19,
        });
      }
// end map

// start about our team swiper 
 var swiper = new Swiper('.swiper-container', {
			  effect: 'coverflow',
			  grabCursor: true,
			  centeredSlides: true,
			  slidesPerView: 'auto',
			  coverflowEffect: {
				rotate: 20,
				stretch: 0,
				depth: 200,
				modifier: 1,
				slideShadows: true,
			  },
			  loop: true,
			  autoplay: {
					delay: 2500,
					disableOnInteraction: false,
				},
			});

