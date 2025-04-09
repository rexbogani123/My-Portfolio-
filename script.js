const body = document.body

const btnTheme = document.querySelector('.fa-moon')
const btnHamburger = document.querySelector('.fa-bars')

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass)
  btnTheme.classList.add(btnClass)
}

const getBodyTheme = localStorage.getItem('portfolio-theme')
const getBtnTheme = localStorage.getItem('portfolio-btn-theme')

addThemeClass(getBodyTheme, getBtnTheme)

const isDark = () => body.classList.contains('dark')

const setTheme = (bodyClass, btnClass) => {

	body.classList.remove(localStorage.getItem('portfolio-theme'))
	btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'))

  addThemeClass(bodyClass, btnClass)

	localStorage.setItem('portfolio-theme', bodyClass)
	localStorage.setItem('portfolio-btn-theme', btnClass)
}

const toggleTheme = () =>
	isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun')

btnTheme.addEventListener('click', toggleTheme)

const displayList = () => {
	const navUl = document.querySelector('.nav__list')

	if (btnHamburger.classList.contains('fa-bars')) {
		btnHamburger.classList.remove('fa-bars')
		btnHamburger.classList.add('fa-times')
		navUl.classList.add('display-nav-list')
	} else {
		btnHamburger.classList.remove('fa-times')
		btnHamburger.classList.add('fa-bars')
		navUl.classList.remove('display-nav-list')
	}
}

btnHamburger.addEventListener('click', displayList)

const scrollUp = () => {
	const btnScrollTop = document.querySelector('.scroll-top')

	if (
		body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
	) {
		btnScrollTop.style.display = 'block'
	} else {
		btnScrollTop.style.display = 'none'
	}
}

document.addEventListener('scroll', scrollUp)

document.getElementById('btn-theme').addEventListener('click', function () {
	const body = document.body;
	const resumeButton = document.querySelector('.btn--outline');
  
	// Toggle the theme class
	body.classList.toggle('bright');
  
	// Change the text color of the Resume button based on the theme
	if (body.classList.contains('bright')) {
	  // White text for bright theme
	} else {
	  // Black text for dark theme
	}
  });

document.addEventListener("DOMContentLoaded", () => {
  const text = "Hi, I am Rex V. Bogani";
  const typingElement = document.getElementById("typing-effect");
  let index = 0;

  function type() {
    if (index < text.length) {
      typingElement.textContent += text[index];
      index++;
      setTimeout(type, 100); // Adjust typing speed (100ms per character)
    } else {
      setTimeout(() => {
        typingElement.textContent = ""; // Clear the text
        index = 0; // Reset the index
        type(); // Restart the typing effect
      }, 1000); // Pause for 1 second before restarting
    }
  }

  // Start the typing effect
  type();
});



