
function setup(){

    const faders = document.querySelectorAll(".fade-in");
    const fadersWithDelay = document.querySelectorAll(".fade-in-with-delay");
    const sliders = document.querySelectorAll(".slide-in");

    const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
    ) {
        entries.forEach((entry, index) => {
            if (!entry.isIntersecting) {
              return;
            }

            if (!entry.target.classList.contains("fade-in-with-delay")){
                entry.target.classList.add("appear");
            } else {
                setTimeout(() => {
                    entry.target.classList.add("appear");
                }, (index + 1) * 70);
            }
            appearOnScroll.unobserve(entry.target);
        });
          
    },
    appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
      });

    fadersWithDelay.forEach(faderWithDelay => {
    appearOnScroll.observe(faderWithDelay);
    });
      
      sliders.forEach(slider => {
        appearOnScroll.observe(slider);
      });
}

export default setup;