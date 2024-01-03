

// SLIDER

new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    perView: 3,
    gap: 15,
    breakpoints: {
        767: {
            perView: 2,
        },
        425: {
            perView: 1,
        }
    },
}).mount();
