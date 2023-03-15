window.onload = function(){
    var swiper = new Swiper(".otherSaySwipoer", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        keyboard: true,
    });
}

//eye 기능
// var pc = window.matchMedia("screen and (min-width: 1025px)");
// if (pc.matches) {

//     const main = document.querySelector('.pro2');

//     function rotate(event) {
//         const elImg = document.querySelectorAll('.svg-1');
//         const x = event.clientX;
//         const y = event.clientY;
//         const w = window.innerWidth / 2;
//         const h = window.innerHeight / 3;
//         const kyo = x - w;
//         const m = y - h;
//         const img1 = (kyo / w) * 30;
//         const img2 = (m / h) * 15;

//         for (i = 0; i < elImg.length; i++) {
//             elImg[i].style.transform = `translateY(${img2}px) translateX(${img1}px)`;
//         }
//     }
//     main.addEventListener("mousemove", function (event) {
//         rotate(event)
//     });

// } else {
//     const elEyeball = document.querySelector('.svg-1');

//     let pos = { y: 0, y2: 0, state: '', eyeMove: true }
//     let bbb = 0;

//     window.addEventListener('scroll', function () {

//         if (pos.eyeMove) {
//             elEyeball.style.transform = `translateX(${bbb}px)`;
//             bbb += 1.5;
//             if (bbb == 12) pos.eyeMove = false;
//         } else {
//             elEyeball.style.transform = `translateX(${bbb}px)`;
//             bbb -= 1.5;
//             if (bbb == -12) pos.eyeMove = true;
//         }

//     })

// }

// const mobill = window.matchMedia("screen and (max-width: 767px)");
// const right = document.querySelector('.right');
// const left = document.querySelector('.left');

/*
if (mobill.matches) {
    // console.log(left);
    left.src = "img/Top2.svg";
    right.src = "img/Top2.svg";
}else{
    left.src = "img/Top.svg";
    right.src = "img/Top.svg";
}
*/


//cursor






// const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
// const lineEq = (y2, y1, x2, x1, currentVal) => {
//     let m = (y2 - y1) / (x2 - x1);
//     let b = y1 - m * x1;
//     return m * currentVal + b;
// };
// const lerp = (a, b, n) => (1 - n) * a + n * b;
// const body = document.body;
// const bodyColor = getComputedStyle(body).getPropertyValue('--color-bg').trim() || 'white';
// const getMousePos = (e) => {
//     let posx = 0;
//     let posy = 0;
//     if (!e) e = window.event;
//     if (e.pageX || e.pageY) {
//         posx = e.pageX;
//         posy = e.pageY;
//     }
//     else if (e.clientX || e.clientY) {
//         posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
//         posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
//     }
//     return { x: posx, y: posy }
// }

// // Window sizes.
// let winsize;
// const calcWinsize = () => winsize = { width: 1000, height: 1000 };
// calcWinsize();
// // Recalculate window sizes on resize.
// window.addEventListener('resize', calcWinsize);

// // Custom mouse cursor.
// class CursorFx {
//     constructor(el) {
//         this.DOM = { el: el };
//         this.DOM.dot = this.DOM.el.querySelector('.cursor__inner--dot');
//         this.DOM.circle = this.DOM.el.querySelector('.cursor__inner--circle');
//         this.bounds = { dot: this.DOM.dot.getBoundingClientRect(), circle: this.DOM.circle.getBoundingClientRect() };
//         this.scale = 1;
//         this.opacity = 1;
//         this.mousePos = { x: 0, y: 0 };
//         this.lastMousePos = { dot: { x: 0, y: 0 }, circle: { x: 0, y: 0 } };
//         this.lastScale = 1;
//         this.lastOpacity = 1;

//         this.initEvents();
//         requestAnimationFrame(() => this.render());
//     }
//     initEvents() {
//         window.addEventListener('mousemove', ev => this.mousePos = getMousePos(ev));
//     }
//     render() {
//         this.lastMousePos.dot.x = lerp(this.lastMousePos.dot.x, this.mousePos.x - this.bounds.dot.width / 2, 1);
//         this.lastMousePos.dot.y = lerp(this.lastMousePos.dot.y, this.mousePos.y - this.bounds.dot.height / 2, 1);
//         this.lastMousePos.circle.x = lerp(this.lastMousePos.circle.x, this.mousePos.x - this.bounds.circle.width / 2, 0.15);
//         this.lastMousePos.circle.y = lerp(this.lastMousePos.circle.y, this.mousePos.y - this.bounds.circle.height / 2, 0.15);
//         this.lastScale = lerp(this.lastScale, this.scale, 0.15);
//         this.lastOpacity = lerp(this.lastOpacity, this.opacity, 0.1);
//         this.DOM.dot.style.transform = `translateX(${(this.lastMousePos.dot.x)}px) translateY(${this.lastMousePos.dot.y}px)`;
//         this.DOM.circle.style.transform = `translateX(${(this.lastMousePos.circle.x)}px) translateY(${this.lastMousePos.circle.y}px) scale(${this.lastScale})`;
//         this.DOM.circle.style.opacity = this.lastOpacity
//         requestAnimationFrame(() => this.render());
//     }
//     enter() {
//         cursor.scale = 3.5;
//         this.DOM.circle.style = "border:none; background-color:rgba(255,255,255,1);mix-blend-mode:difference";
//     }
//     enter2() {
//         this.DOM.dot.style = "opacity:0;"
//         cursor.scale = 0;
//         this.DOM.circle.style = "";
//     }

//     leave() {
//         cursor.scale = 1;
//         this.DOM.dot.style = "background-color:#000";
//         this.DOM.circle.style = "border:1px solid#000; background-color:none;";
//     }
//     click() {
//         this.lastScale = 1;
//         this.lastOpacity = 0;
//     }
// }

// const cursor = new CursorFx(document.querySelector('.cursor'));

// // Custom cursor chnages state when hovering on elements with 'data-hover'.
// [...document.querySelectorAll('[data-hover]')].forEach((link) => {
//     link.addEventListener('mouseenter', () => cursor.enter());
//     link.addEventListener('mouseleave', () => cursor.leave());
//     link.addEventListener('click', () => cursor.click());
// });

// [...document.querySelectorAll('[data-hover2]')].forEach((link) => {
//     link.addEventListener('mouseenter', () => cursor.enter2());
//     link.addEventListener('mouseleave', () => cursor.leave());
//     link.addEventListener('click', () => cursor.click());
// });


// const white_cursor = document.querySelectorAll(".white_cursor");
// const red_cursor = document.querySelectorAll(".red_cursor");
// const inner_circle = document.querySelector(".cursor__inner--circle");
// const inner_dot = document.querySelector(".cursor__inner--dot");

// for (i = 0; i < white_cursor.length; i++) {
//     white_cursor[i].addEventListener('mouseover', function () {
//         inner_circle.style = "border:1px solid#fff;";
//         inner_dot.style = "background-color:#fff;";
//     })
//     white_cursor[i].addEventListener('mouseleave', function () {
//         inner_circle.style = "border:1px solid#000;";
//         inner_dot.style = "background-color:#000;";
//     })
// }

// for (i = 0; i < red_cursor.length; i++) {
//     red_cursor[i].addEventListener('mouseover', function () {
//         inner_circle.style = "border:1px solid#d0021b;";
//         inner_dot.style = "background-color:#d0021b;";
//     })
//     red_cursor[i].addEventListener('mouseleave', function () {
//         inner_circle.style = "border:1px solid#000;";
//         inner_dot.style = "background-color:#000;";
//     })
// }



//wave
// window.onload = function () {
//     $('.pro6 .thum').ripples({
//         resolution: 1200,
//         perturbance: 0.05,
//     });
// }




