let menuList = document.getElementById("menuList")

menuList.style.maxHeight = "0px";

function toggleMenu(){
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "300px";
    }
    else{
        menuList.style.maxHeight = "0px";

    }
}


// Limiting the characters in the message textarea and displaying the count
const messageField = document.getElementById('message');
const charCount = document.getElementById('charCount');

messageField.addEventListener('input', function () {
    const currentLength = messageField.value.length;
    charCount.textContent = `${currentLength}/500 caractères`;
});

// Ensuring only numeric input in the phone number field
const phoneField = document.getElementById('phone');
phoneField.addEventListener('input', function (e) {
    const value = phoneField.value;
    phoneField.value = value.replace(/\D/, ''); // Remove non-numeric characters
});

document.querySelectorAll('.team-member img').forEach((img) => {
    img.addEventListener('click', (e) => {
        let overlay = e.target.nextElementSibling;
        overlay.style.opacity = '1';
    });
});



  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('bg-blue-50', 'scale-105', 'transition-transform', 'duration-300');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('bg-blue-50', 'scale-105');
    });
  });



  document.addEventListener("DOMContentLoaded", function() {
    const timelineItems = document.querySelectorAll(".timeline-item");

    const revealOnScroll = () => {
      timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          item.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Initial check
  });



