import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// home1 banner animation
gsap.registerPlugin(ScrollTrigger);
if(document.querySelector('.banner-one')) {
    gsap.timeline()
    .from(".banner-one .box", { opacity: 0, y: 50, duration: 1, ease: "power3.out" })
    .from(".banner-one .sub-heading", { opacity: 0, x: -30, duration: 0.8, ease: "power3.out" }, "-=0.6")
    .from(".banner-one .display-3", { opacity: 0, y: 20, rotateX: 90, duration: 0.8, ease: "power3.out" }, "-=0.5")
    .from(".banner-one .desc", { opacity: 0, y: 20, duration: 0.8, ease: "power3.out" }, "-=0.5")
    .from(".banner-one .btn-primary", { opacity: 0, scale: 0.8, x: -50, duration: 0.6, ease: "back.out(1.7)", scrollTrigger: { trigger: ".btn-primary" } }, "-=0.4")
    .from(".banner-one .hero-video", { opacity: 0, scale: 0.8, x: 50, duration: 0.6, ease: "back.out(1.7)" }, "-=0.4")
    .from(".banner-one .box-1", { opacity: 0, y: -250, rotateX:0.2, duration: 0.8, ease: "back.inOut" }, "-=0.5")
    .from(".banner-one .box-2", { opacity: 0, y: 250, rotateY:0.1, duration: 0.8, ease: "back.inOut" }, "-=0.5")
}

// home2 banner animation
if(document.querySelector('.banner-two')) {
    gsap.timeline()
    .from(".banner-two .small-text-1", { y: -40, duration: 0.7, ease: "power3.inOut" })
    .from(".banner-two .big-text.one", { opacity: 0, rotateX: 90, duration: 1.2, ease: "bounce.out" }, "-=0.5")
    .from(".banner-two .small-text-2", { scale: 0, rotateX: 90, duration: 0.8, ease: "power3.out" }, "-=0.5")
    .from(".banner-two .btn-primary", { scale: 0, rotateX: 90, duration: 0.8, ease: "back.out" }, "-=0.5")
    .from(".banner-two .big-text.two", { scale: 0, opacity: 0, duration: 1.5, ease: "elastic" }, "-=0.5")
}


// home3 banner animation
if(document.querySelector('.banner-three')) {
    gsap.timeline()
    .from(".banner-three .right-img", { clipPath: "inset(0 0 0 100%)", duration: 0.6, ease: "power4.out" })
    .from(".banner-three .heading", { filter: "blur(10px)", rotateY: 90, duration: 0.6, ease: "back.out" })
    .from(".banner-three .play-btn", { opacity: 0, y: -200, duration: 1.2, ease: "elastic.inOut" })
}

//  fade up animation
let fadeArray_items = document.querySelectorAll('.fade_anim');
if (fadeArray_items.length > 0) {
  const fadeArray = gsap.utils.toArray('.fade_anim');
  fadeArray.forEach((item, i) => {
    var fade_direction = 'bottom';
    var onscroll_value = 1;
    var duration_value = 0.75;
    var fade_offset = 40;
    var delay_value = 0.15;
    var ease_value = 'power2.out';

    if (item.getAttribute('data-duration')) {
      duration_value = item.getAttribute('data-duration');
    }
    if (item.getAttribute('data-fade-from')) {
      fade_direction = item.getAttribute('data-fade-from');
    }
    if (item.getAttribute('data-delay')) {
      delay_value = item.getAttribute('data-delay');
    }

    let animation_settings = {
      opacity: 0,
      ease: ease_value,
      duration: duration_value,
      delay: delay_value,
    };

    if (fade_direction == 'top') {
      animation_settings['y'] = -fade_offset;
    }
    if (fade_direction == 'left') {
      animation_settings['x'] = -fade_offset;
    }

    if (fade_direction == 'bottom') {
      animation_settings['y'] = fade_offset;
    }

    if (fade_direction == 'right') {
      animation_settings['x'] = fade_offset;
    }

    if (onscroll_value == 1) {
      animation_settings['scrollTrigger'] = {
        trigger: item,
        start: 'top 90%',
      };
    }
    gsap.from(item, animation_settings);
  });
}

// title anim
gsap.utils.toArray(".title_anim").forEach((title, i) => {
  gsap.fromTo(
    title,
    {
      opacity: 0,    
      clipPath: "inset(0 100% 0 0)", // Hidden from right
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      clipPath: "inset(0 0% 0 0)", // Reveal from right
    //   duration: 1,
      ease: "power3.in",
      delay: i * 0.3, // Stagger effect
      scrollTrigger: {
        trigger: title,
        start: "top 85%", // Start when title enters viewport
        toggleActions: "play none none none",
      },
    }
  );
});

// reveal animation
function revealAnim(selector) {
    document.querySelectorAll(selector).forEach((item) => {
        const direction = item.getAttribute("data-reveal-from") || "left"; // Default: bottom
        const delay = parseFloat(item.getAttribute("data-delay")) || 0; // Default: 0s
        const duration = parseFloat(item.getAttribute("data-duration")) || 1.2; // Default: 1.2s
    
        // Define animation properties based on direction
        let fromVars = {
            opacity: 0,
            clipPath: "inset(0 0 0 0)", // Default, changes dynamically
            ease: "power3.out",
            duration: duration,
            delay: delay,
        };
    
        switch (direction) {
            case "top":           
                fromVars.clipPath = "inset(100% 0% 0% 0%)";
                break;
            case "right":           
                fromVars.clipPath = "inset(0% 0% 0% 100%)";
                break;
            case "bottom":           
                fromVars.clipPath = "inset(0% 0% 100% 0%)";
                break;
            case "left":           
                fromVars.clipPath = "inset(0% 100% 0% 0%)";
                break;
        }
    
        gsap.fromTo(
            item,
            fromVars,
            {
                opacity: 1,
                y: 0,
                x: 0,
                duration: duration,
                delay: delay,
                ease: "power3.inOut",
                clipPath: "inset(0% 0% 0% 0%)",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            }
        );
    });
}

// text split animation
function splitTextAnimation(selector) {
    document.querySelectorAll(selector).forEach((item) => {
        const delay = parseFloat(item.getAttribute("data-delay")) || 0; // Default: 0s
        const duration = parseFloat(item.getAttribute("data-duration")) || .5; // Default: 1s
    
        // Preserve spaces while wrapping each letter in a span
        let text = item.innerText;
        item.innerHTML = text.split("").map(letter => {
            return letter === " " 
                ? "&nbsp;" // Keep space intact
                : `<span style="display: inline-block; opacity: 0;">${letter}</span>`;
        }).join("");
    
        const letters = item.querySelectorAll("span");
    
        gsap.to(letters, {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: duration,
            delay: delay,
            ease: "back.out(1.7)",
            stagger: 0.05, // Stagger effect for each letter
            scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        });
    
        // Initial hidden state for animation
        gsap.set(letters, { opacity: 0, y: 50, rotationX: 90 });
    });
}
// scale and fade animation
function scaleFadeTextReveal(selector) {
    document.querySelectorAll(selector).forEach((item) => {
        const delay = parseFloat(item.getAttribute("data-delay")) || 0; // Default delay
        const duration = parseFloat(item.getAttribute("data-duration")) || 1.4; // Default duration

        // Preserve spaces while wrapping each letter in a span
        let text = item.innerText;
        item.innerHTML = text.split("").map(letter => {
            return letter === " " 
                ? "&nbsp;" // Keeps spaces intact
                : `<span style="display: inline-block; opacity: 0; transform: scale(0.5);">${letter}</span>`;
        }).join("");

        const letters = item.querySelectorAll("span");

        gsap.to(letters, {
            opacity: 1,
            scale: 1,
            duration: duration,
            delay: delay,
            rotateX: 0,
            ease: "back.out", // Gives a bouncy feel
            stagger: 0.05, // Adds a smooth delay between each letter
            scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        });

        // Set initial hidden state
        gsap.set(letters, { rotateX: 180 });
    });
}

// sliding blur text animation
function slidingBlurTextReveal(selector) {
    document.querySelectorAll(selector).forEach((item) => {
        const delay = parseFloat(item.getAttribute("data-delay")) || 0; // Default delay
        const duration = parseFloat(item.getAttribute("data-duration")) || .8; // Default duration

        // Preserve spaces while wrapping each letter in a span
        let text = item.innerText;
        item.innerHTML = text.split("").map(letter => {
            return letter === " " 
                ? "&nbsp;" // Keeps spaces intact
                : `<span style="display: inline-block; opacity: 0; filter: blur(10px);">${letter}</span>`;
        }).join("");

        const letters = item.querySelectorAll("span");

        gsap.to(letters, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: duration,
            delay: delay,
            ease: "power3.out",
            stagger: 0.05, // Adds a smooth delay between each letter
            scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        });

        // Set initial hidden state
        gsap.set(letters, { opacity: 0, filter: "blur(10px)" });
    });
}
// explode text animation
function explodeTextReveal(selector) {
    document.querySelectorAll(selector).forEach((item) => {
        const delay = parseFloat(item.getAttribute("data-delay")) || 0; // Default delay
        const duration = parseFloat(item.getAttribute("data-duration")) || 1; // Default duration

        // Preserve spaces while wrapping each letter in a span
        let text = item.innerText;
        item.innerHTML = text.split("").map(letter => {
            return letter === " " 
                ? "&nbsp;" // Keeps spaces intact
                : `<span style="display: inline-block; transform: scale(0); opacity: 0;">${letter}</span>`;
        }).join("");

        const letters = item.querySelectorAll("span");

        gsap.to(letters, {
            scale: 1, // Resets the scale to normal size
            opacity: 1, // Fades in the letter
            duration: duration,
            delay: delay,
            ease: "back.out(1.7)", // Exploding back effect
            stagger: 0.05, // Adds a stagger between each letter for the explosion effect
            scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        });

        // Set initial hidden state with scaling to 0
        gsap.set(letters, { scale: 0, opacity: 0 });
    });
}
function slidingBlurCardReveal(selector) {
  document.querySelectorAll(selector).forEach((item) => {
      const delay = parseFloat(item.getAttribute("data-delay")) || 0; // Default delay
      const duration = parseFloat(item.getAttribute("data-duration")) || 1.2; // Default duration

      // Set initial hidden state
      gsap.set(item, { opacity: 0, filter: "blur(10px)", y: 50 });

      gsap.to(item, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: duration,
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none none",
          },
      });
  });
}

// Initialize the animation on elements with the .card-reveal class
slidingBlurCardReveal(".card_reveal");

// Call function for elements with class "explode-anim"
slidingBlurTextReveal(".blur_anim");
scaleFadeTextReveal(".scale_anim");
revealAnim(".reveal_anim");
splitTextAnimation(".split_anim");
explodeTextReveal(".explode_anim");


// 3D Flip Text Reveal Animation
function flipTextReveal(selector) {
    document.querySelectorAll(selector).forEach((item) => {
        const delay = parseFloat(item.getAttribute("data-delay")) || 0; // Default delay
        const duration = parseFloat(item.getAttribute("data-duration")) || .8; // Default duration

        // Preserve spaces while wrapping each letter in a span
        let text = item.innerText;
        item.innerHTML = text.split("").map(letter => {
            return letter === " " 
                ? "&nbsp;" // Keeps spaces intact
                : `<span style="display: inline-block; opacity: 0; transform: rotateX(-180deg); transform-origin: center; will-change: transform;">${letter}</span>`;
        }).join("");

        const letters = item.querySelectorAll("span");

        gsap.to(letters, {
            opacity: 1, // Fades in the letters
            transform: "rotateX(0)", // Flips the letter into its normal position
            duration: duration,
            delay: delay,
            ease: "power3.out",
            stagger: 0.1, // Adds a staggered flip to the letters
            scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        });

        // Set initial state with flipped letters
        gsap.set(letters, { opacity: 0, transform: "rotateX(-180deg)" });
    });
}

// Call function for elements with class "flip-anim"
flipTextReveal(".flip_anim");



