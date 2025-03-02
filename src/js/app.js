import '../css/style.scss';
import "./sliders";
import "./animations";
import GLightbox from 'glightbox';
import SlimSelect from 'slim-select';
import { Accordion, Submenu, Tabs } from './components';
const searchBtn = document.querySelector(".search-btn");
const searchBar = document.querySelector(".search-bar");
const searchCloseBtn = document.querySelector(".search-bar-close");
const headerTwo = document.querySelector(".header-two");
const headerFour = document.querySelector(".header-four");

// show/hide loader
document.addEventListener("DOMContentLoaded", function () {
  const loader = document.querySelector(".screen_loader");
  setTimeout(() => {
   loader && loader.classList.add("hide");
  }, 100);
});

// show/hide search bar
searchBtn && searchBtn.addEventListener("click", () => {
  searchBar.classList.toggle("active");
});

searchCloseBtn && searchCloseBtn.addEventListener("click", () => {
  searchBar.classList.remove("active");
});

if (searchBar) {
  document.addEventListener("click", (e) => {
    if (!searchBar.contains(e.target) && !searchBtn.contains(e.target)) {
      searchBar.classList.remove("active");
    }
  });

  document.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      searchBar.classList.remove("active");
    }
  });
}

// add active class on hover
window.addEventListener("scroll", (e) => {
  if (headerTwo) {
    if (window.scrollY >= 150) {
      headerTwo.classList.add("active");
    } else {
      headerTwo.classList.remove("active");
    }
  }
  if (headerFour) {
    if (window.scrollY >= 150) {
      headerFour.classList.add("bg-neutral-0");
    } else {
      headerFour.classList.remove("bg-neutral-0");
    }
  }
})

// add active class on header if scroll restored
document.addEventListener('DOMContentLoaded', () => {
  if (headerTwo) {
    document.documentElement.scrollTop >= 20 ? headerTwo.classList.add('active') : ''
  }
  if (headerFour) {
    document.documentElement.scrollTop >= 20 ? headerFour.classList.add('bg-neutral-0') : ''
  }
})

// mobile menu
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".mobile-menu");
const menuClose = document.querySelector(".menu-close");
menuBtn && menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

menuClose && menuClose.addEventListener("click", () => {
  menu.classList.remove("active");
});

// close menu on click outside
if (menuBtn && menu) {
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
      menu.classList.remove("active");
    }
  });
}


/* ========== GLightbox ========== */
if (document.querySelector('.hero-video')) {
  GLightbox({
    selector: '.hero-video'
  });
}

// show current year on footer
if (document.getElementById('year')) {
  document.getElementById('year').innerHTML = new Date().getFullYear();
}



document.addEventListener('DOMContentLoaded', () => {
  // Initialize all tabs on the page
  const tabGroups = document.querySelectorAll('.tabs');
  tabGroups.forEach((tabGroup) => {
    new Tabs(tabGroup);
  });

  // initialize accordions
  if (document.querySelector('.accordion')) {
    document.querySelectorAll('.accordion').forEach((el) => {
      new Accordion(el);
    });
  }

  // initialize submenus
  if (document.querySelector('.submenu-item')) {
    new Submenu('.submenu-item');
  }

  /* ========== ANIMATED CIRCULAR TEXT ========== */
  const defaultText = "explore more . explore more . ";
  window.onload = function () {
    const texts = document.querySelectorAll(".text");
    texts.forEach(text => {
      const str = text.getAttribute('data-text') || defaultText;

      for (let i = 0; i < str.length; i++) {
        let span = document.createElement('span');
        span.innerHTML = str[i];
        text.appendChild(span);
        span.style.transform = `rotate(${12 * i}deg)`;
      }
    });
  };

});


// glightbox
const gallery = document.querySelector('.gallery')
gallery && GLightbox({
  touchNavigation: !0,
  loop: !0
})

// set background images
const bgImages = document.querySelectorAll('[data-bg]');
if (bgImages.length) {
  bgImages.forEach(image => {
    const bgList = image.getAttribute('data-bg').split(',').map(bg => `url(${bg.trim()})`);
    image.style.backgroundImage = bgList.join(', ');
  });
}

// slim select
const selects = document.querySelectorAll('select');
if (selects.length) {
  selects.forEach(select => {
    const options = select.querySelectorAll('option')
    new SlimSelect({
      select,
      settings: {
        allowDeselect: true,
        placeholder: 'Select an option',
        showSearch: options.length > 5
      }
    });
  });
}


// Set initial values
if (document.querySelector('.minprice')) {
  document.querySelector('.minprice').textContent = '$' + document.getElementById('min').value;
  document.querySelector('.maxprice').textContent = '$' + document.getElementById('max').value;

  // Event listener for min range slider
  document.getElementById('min').addEventListener('input', function () {
    document.querySelector('.minprice').textContent = '$' + this.value;
  });

  // Event listener for max range slider
  document.getElementById('max').addEventListener('input', function () {
    document.querySelector('.maxprice').textContent = '$' + this.value;
  });
}

// set product quantity
if (document.querySelector('.productQuantity')) {
  document.querySelectorAll('.productQuantity').forEach(el => {
    const plusBtn = el.querySelector('.increase')
    const minusBtn = el.querySelector('.decrease')
    const quantityEl = el.querySelector('.quantity')

    let quantity = quantityEl.innerHTML;

    plusBtn.addEventListener('click', () => {
      quantity++;
      quantityEl.innerHTML = quantity;
    })
    minusBtn.addEventListener('click', () => {
      if (quantity > 1) {
        quantity--;
      }
      quantityEl.innerHTML = quantity;
    })
  })

}

// password input
if (document.querySelector('.passwordInput')) {
  const inputs = document.querySelectorAll('.passwordInput')
  inputs.forEach(input => {
    const eye = input.querySelector('.hgi-view')
    const eyeSlash = input.querySelector('.hgi-view-off-slash')
    const password = input.querySelector('input')
    eye.addEventListener('click', () => {
      password.type = 'password'
      eye.style.display = 'none'
      eyeSlash.style.display = 'block'
    })
    eyeSlash.addEventListener('click', () => {
      password.type = 'text'
      eye.style.display = 'block'
      eyeSlash.style.display = 'none'
    })
  })
}

// set active class on menu links
document.querySelectorAll('.menu-link').forEach((el) => {
  const path = window.location.pathname;
  let updatedPath = path.startsWith("/") ? path.substring(1) : path;

  if (updatedPath === el.getAttribute('href')) {
      el.classList.add('active');
  }
})
document.querySelectorAll('.dropdown-menu li a').forEach((el) => {
  const path = window.location.pathname;
  let updatedPath = path.startsWith("/") ? path.substring(1) : path;

  if (updatedPath === el.getAttribute('href')) {
      el.parentElement.parentElement.previousElementSibling.classList.add('active');
      el.classList.add('active')
  }
})

// show hide newsletter
const newsletter = document.querySelector('.newsletters')
const closeNewsletter = document.querySelector('.close-newsletter')
if(newsletter) {
  setTimeout(() => {
    newsletter.classList.add('active')
    document.body.style.overflow = 'hidden'
  }
  , 5000)
  closeNewsletter.addEventListener('click', () => {
    newsletter.classList.remove('active')
    document.body.style.overflow = 'auto'
  })
}

// service cards
const serviceCards = document.querySelectorAll('.service-card')
serviceCards.forEach(card => {
  card.addEventListener('click', () => {   
    serviceCards.forEach(card => card.classList.remove('active'))
    if(!card.classList.contains('active')) {
      card.classList.add('active')
    }
  })
})