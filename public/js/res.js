



document.addEventListener('DOMContentLoaded', () => {
    

    ScrollReveal().reveal('h1', {
        distance: '80px',
        duration: 2000,
        delay: 300,
        origin: 'top'
    });

    ScrollReveal().reveal('.about h2, .skills h2, .about p,.about li' , {
        distance: '40px',
        duration: 2000,
        delay: 300,
        origin: 'bottom',
        interval: 100 
    });
});










document.addEventListener("DOMContentLoaded", function () {
    ScrollReveal().reveal('.load1', {
        duration: 1000,
        easing: 'ease-in-out',
        beforeReveal: function(el) {
            el.classList.add('animate');
        }
    });

    ScrollReveal().reveal('.load2', {
        duration: 1000,
        easing: 'ease-in-out',
        beforeReveal: function(el) {
            el.classList.add('animate');
        }
    });

    ScrollReveal().reveal('.load3', {
        duration: 1000,
        easing: 'ease-in-out',
        beforeReveal: function(el) {
            el.classList.add('animate');
        }
    });

    ScrollReveal().reveal('.load4', {
        duration: 1000,
        easing: 'ease-in-out',
        beforeReveal: function(el) {
            el.classList.add('animate');
        }
    });
    ScrollReveal().reveal('.load5', {
        duration: 1000,
        easing: 'ease-in-out',
        beforeReveal: function(el) {
            el.classList.add('animate');
        }
    });
    ScrollReveal().reveal('.load6', {
        duration: 1000,
        easing: 'ease-in-out',
        beforeReveal: function(el) {
            el.classList.add('animate');
        }
    });
    ScrollReveal().reveal('.load7', {
        duration: 1000,
        easing: 'ease-in-out',
        beforeReveal: function(el) {
            el.classList.add('animate');
        }
    });
    ScrollReveal().reveal('.load8', {
        duration: 1000,
        easing: 'ease-in-out',
        beforeReveal: function(el) {
            el.classList.add('animate');
        }
    });

    

});






const root = document.documentElement;
const iconElementsDisplayed = getComputedStyle(root).getPropertyValue("--icon-elements-displayed");
const iconContent = document.querySelector("ul.icon-content");

root.style.setProperty("--icon-elements", iconContent.children.length);

for(let i=0; i<iconElementsDisplayed; i++) {
  iconContent.appendChild(iconContent.children[i].cloneNode(true));
}






//form 

const scriptURL = 'https://script.google.com/macros/s/AKfycbzLvyDl2pxNK2ANtvouFLG_R0swJ2P0pBm3f3u72jxhcKXSvLkAExCOvJIka-2Mj9UMkw/exec';  // Replace with your actual Google Apps Script URL

const form = document.getElementById('contact-form');

// Function to validate form inputs
function validateForm() {
  const name = form.querySelector('input[name="Name"]')?.value.trim(); // Using optional chaining
  const email = form.querySelector('input[name="Email"]')?.value.trim();
  const number = form.querySelector('input[name="Number"]')?.value.trim(); // Corrected variable name
  const message = form.querySelector('textarea[name="message"]')?.value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[1-9][0-9]{9}$/;

  if (!name) {
    alert('Please enter your name.');
    return false;
  }

  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  if (number && !phonePattern.test(number)) {
    alert('Please enter a valid phone number.');
    return false;
  }

  if (!message) {
    alert('Please enter your message.');
    return false;
  }

  return true;
}


// Form submission event listener
form.addEventListener('submit', e => {
  e.preventDefault();  // Prevent the default form submission

  if (validateForm()) {  // Proceed only if validation passes
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => response.json())
      .then(data => {
        if (data.result === 'success') {
          alert("Thank you! Your form has been submitted successfully.");
          form.reset();  // Reset the form after successful submission
        } else {
          alert("Error submitting form: " + data.error);
        }
      })
      .catch(error => console.error('Error!', error.message));
  }
});