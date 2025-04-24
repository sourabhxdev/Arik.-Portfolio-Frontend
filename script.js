var name1 = document.querySelector("#h1-1")
var name2 = document.querySelector("#h1-2")

const target = document.querySelector('.moving-name');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('🎯 DIV is in view');

      // Add logic for scroll down or up here
      const direction = entry.boundingClientRect.y > 0 ? 'down' : 'up';
      if(direction == 'down'){
                console.log("User scrolling down");
                name1.style.left = `-160px`
                name2.style.right = `-160px`
                name1.style.opacity = `1`
                name2.style.opacity = `1`
            }
            else{
                console.log("User scrolling up");
                name1.style.left = `-300px`
                name2.style.right = `-300px`
                name1.style.opacity = `0.3`
                name2.style.opacity = `0.3`
            }
      // 👉 Trigger your animation or function
      // e.g., target.classList.add('animate');
    }
  });
}, {
  threshold: 0.1, // 10% of the div must be visible to trigger
});

observer.observe(target);
