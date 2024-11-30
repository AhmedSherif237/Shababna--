document.addEventListener('DOMContentLoaded', function () {

    const numberElement = document.querySelector('.number');
    const targetNumber = parseInt(numberElement.textContent, 10);
    

    function updateNumber() {
        const duration = 2000; 
        const stepTime = 50; 
        const steps = Math.ceil(duration / stepTime);
        const stepValue = targetNumber / steps;
        let currentNumber = 0;

        function incrementNumber() {
            currentNumber += stepValue;
            if (currentNumber >= targetNumber) {
                numberElement.textContent = targetNumber;
            } else {
                numberElement.textContent = Math.floor(currentNumber);
                setTimeout(incrementNumber, stepTime);
            }
        }

        incrementNumber();
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateNumber();
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.5 
    });

    const sectionElement = document.querySelector('.join');
    observer.observe(sectionElement);
});



const toggleMenu = document.querySelector('.toggle-menu');
const navLinks = document.querySelector('nav ul');


toggleMenu.addEventListener('click', function() {
  navLinks.classList.toggle('active');
});


const slider = document.querySelector('.slider');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const dots = document.querySelectorAll('.dot');

let scrollAmount = 0;
const cardWidth = document.querySelector('.card').offsetWidth + 20; 
let currentIndex = 0;

function updateDots(index) {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {
    if (scrollAmount < slider.scrollWidth - slider.clientWidth) {
        scrollAmount += cardWidth;
        slider.scrollTo({
            left: scrollAmount,
            behavior: 'smooth',
        });
        currentIndex = (currentIndex + 1) % dots.length;
        updateDots(currentIndex);
    }
});


prevBtn.addEventListener('click', () => {
    if (scrollAmount > 0) {
        scrollAmount -= cardWidth;
        slider.scrollTo({
            left: scrollAmount,
            behavior: 'smooth',
        });
        currentIndex = (currentIndex - 1 + dots.length) % dots.length;
        updateDots(currentIndex);
    }
});


document.getElementById('showFormBtn').onclick = function() {
    document.getElementById('formModal').style.display = 'block';
};

document.querySelector('.close-btn').onclick = function() {
    document.getElementById('formModal').style.display = 'none';
};

window.onclick = function(event) {
    if (event.target == document.getElementById('formModal')) {
        document.getElementById('formModal').style.display = 'none';
    }
};

function closeModal() {
    document.getElementById('formModal').style.display = 'none';
}

document.getElementById('showFormBtn').addEventListener('click', function() {
    document.getElementById('formModal').style.display = 'block'; 
});

function closeModal() {
    document.getElementById('formModal').style.display = 'none'; 
}

// وظيفة لتقديم النموذج
function submitDonationForm(event) {
    event.preventDefault(); 


    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var charity = document.getElementById('charity').value;
    var details = document.getElementById('details').value;


    if (name && phone && address && charity) {

        document.getElementById('donationForm').style.display = 'none';
        
        document.getElementById('confirmationMessage').style.display = 'block';
        
        document.getElementById('confirmationMessage').innerHTML = `
            <p>شكراً لتبرعك!</p>
            <p>سيتم التواصل معك قريباً.</p>
        `;
    } else {
        alert('من فضلك أكمل جميع الحقول المطلوبة');
    }
}
