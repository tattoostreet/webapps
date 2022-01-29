const nav = document.querySelector(".nav-items");
const slides = document.querySelector(".slides-gallery");
const images = document.querySelectorAll(".slide-gallery");
let margin = 0;
let currentIndex = 0;

function openSideMenu() {
    const burger = document.querySelector(".burger-menu");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-open");
    })
}

function closeSideMenuOnClick() {
    const links = document.querySelectorAll(".nav-items a");

    links.forEach((item, index) => {
        links[index].addEventListener("click", () => {
            nav.classList.remove("nav-open");
            console.log(`Clicked: ${item.innerHTML}`);
        })
    });

}

function slideRightGallery() {
    const rightButton = document.querySelector("#gallery-right");

    rightButton.addEventListener("click", () => {

        if (currentIndex < images.length - 1) {
            currentIndex += 1;
            margin += 100;
            slides.style.marginLeft = `-${margin}%`;
            console.log(`Right button is clicked: ${currentIndex} ${margin}`);
        } else {
            console.log("You have reached the last image..")
        }
    })


}

function slideLeftGallery() {
    const leftButton = document.querySelector("#gallery-left");

    leftButton.addEventListener("click", () => {
        if (currentIndex == 0) {
            console.log("You have reached the first image..")
        } else if (currentIndex <= images.length - 1) {
            currentIndex -= 1;
            margin -= 100;
            slides.style.marginLeft = `-${margin}%`;
            console.log(`Left button is clicked: ${currentIndex} ${margin}`);
        }
    })

}

function showAllTestimonials() {
    const testimonials = document.querySelector(".section-testimonials");
    const showAllButton = document.getElementById("show-more");

    showAllButton.addEventListener("click", () => {
        testimonials.classList.toggle("hide-testimonials");
        if (testimonials.classList.contains("hide-testimonials")) {
            showAllButton.innerHTML = "See more..";
        } else {
            showAllButton.innerHTML = "See less..";
        }
    })

}


const modalContainer = document.querySelectorAll(".modal-container");

function showModal() {
    const bookNow = document.querySelectorAll("#book-now");

    for (let i = 0; i < bookNow.length; i++) {
        bookNow[i].addEventListener("click", () => {
            modalContainer[i].classList.add("show-modal")
        })
    }
}


function closeModal() {
    const closeModal = document.querySelectorAll("#close-modal");
    for (let i = 0; i < closeModal.length; i++) {
        closeModal[i].addEventListener("click", () => {
            modalContainer[i  ].classList.remove("show-modal")
        })
    }
}


const app = () => {
    openSideMenu();
    closeSideMenuOnClick();
    slideRightGallery();
    slideLeftGallery();
    showAllTestimonials();
    showModal();
    closeModal();
}

app();


