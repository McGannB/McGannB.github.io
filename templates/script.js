// Example: Smooth scrolling to sections on click
const sections = document.querySelectorAll('section[id]');

sections.forEach(section => {
  const navLink = document.querySelector(`nav a[href="#${section.id}"]`);

  navLink.addEventListener('click', (event) => {
    event.preventDefault();

    const sectionTop = section.offsetTop;

    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
  });
});

// Example: Hover effect on skills
const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.backgroundColor = '#f0f0f0'; // Lighten background on hover
  });

  item.addEventListener('mouseout', () => {
    item.style.backgroundColor = '#fff'; // Reset background on mouseout
  });
});