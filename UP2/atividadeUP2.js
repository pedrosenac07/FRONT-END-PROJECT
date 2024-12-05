const carousels = document.querySelectorAll('.carousel');
        carousels.forEach(carousel => {
            let scrollAmount = 0;
            setInterval(() => {
                carousel.scrollLeft += 200;
                scrollAmount += 200;
                if (scrollAmount >= carousel.scrollWidth) {
                    carousel.scrollLeft = 0;
                    scrollAmount = 0;
                }
            }, 3000);
        });