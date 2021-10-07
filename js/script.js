// menu section js 

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{

   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   shoppingCart.classList.remove('active');
   loginUser.classList.remove('active');
    
}



// search section js 

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{

    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
   shoppingCart.classList.remove('active');
   loginUser.classList.remove('active');
    
}


// shopping cart section js 

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{

   shoppingCart.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginUser.classList.remove('active');
    
}

// login section js 

let loginUser = document.querySelector('.form');

document.querySelector('#login-btn').onclick = () =>{

   loginUser.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   shoppingCart.classList.remove('active');
    
}

window.onscroll = () =>{

   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   shoppingCart.classList.remove('active');
   loginUser.classList.remove('active');
    
}

                    
                    // counter design
                    document.addEventListener("DOMContentLoaded", () => {
                        function counter(id, start, end, duration){
                            let obj = document.getElementById(id),
                            current = start,
                            range = end - start,
                            increment = end > start ? 1 : -1,
                            step = Math.abs(Math.floor(duration /  range)),
                            timer = setInterval(() => {
                                current += increment;
                                obj.textContent = current;
                                if(current == end){
                                    clearInterval(timer);
                                }
                            }, step);
                        }
                        counter("count1", 0, 2500, 3000);
                        counter("count2", 100, 4786, 2500);
                        counter("count3", 0, 2000, 3000);
                        counter("count4", 0, 5110, 3000);
                     });



                    // slider js 

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:2500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,

      },
      768: {
        slidesPerView: 2,
     
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });


        //    review slider 

  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:2500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,

      },
      768: {
        slidesPerView: 2,
     
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });