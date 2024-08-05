const swiper = new Swiper('.swiper', {        
    direction: 'horizontal',
    slidesPerView: 5,
    spaceBetween: 10,   
    slidesOffsetAfter: 10, 
    breakpoints: {
        280: {
            slidesPerView: 1.9,
            spaceBetween: 10
        },
        360: {
            slidesPerView: 2.2,
            spaceBetween: 10
        },
        430: {
            slidesPerView: 2.7,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 4.8,
            spaceBetween: 10
        },
        784: {
            slidesPerView: 3.3,
            spaceBetween: 10
        },
        1024: {
            slidesPerView: 4.3,
            spaceBetween: 10
        },
        1169: {
            slidesPerView: 5,
            spaceBetween: 10
        }
    }
});

$('.nav-button').on('click', function() {
    $(this).toggleClass('active');
    $('.mobile-menu').toggleClass('active');
    $('body').toggleClass('overflow');
    $(".modal-back").fadeToggle();
})

$('.header-menu__cart').on('click', function() {
    $('.modal-cart').toggleClass('active');
    $('body').toggleClass('overflow');
    $(".modal-back").fadeToggle();
})

$('.close-modal-cart').on('click', function() {
    $('.modal-cart').toggleClass('active');
    $('body').toggleClass('overflow');
    $(".modal-back").fadeToggle();
})


$('.modal-call_close').on('click', function() {
    $('.modal-call').toggleClass('active');
    $('body').toggleClass('overflow');
})

$('.open-modal').on('click', function() {
    $('.modal-call').toggleClass('active');
    $('body').toggleClass('overflow');
})


$('.modal-action_close').on('click', function() {
    $('.modal-action').toggleClass('active');
    $('body').toggleClass('overflow');
})

$('.swiper-slide').on('click', function() {
    $('.modal-action').toggleClass('active');
    $('body').toggleClass('overflow');
})


$('.modal-img__close').on('click', function() {
    $('.modal-img').toggleClass('active');
    $('body').toggleClass('overflow');
})


function isScreenLessThan430() {
    return window.innerWidth < 784;
}

$('.product__elem-img').on('click', function() {
    if (isScreenLessThan430()) { 
        $('.modal-img').toggleClass('active');
        $('body').toggleClass('overflow');
    }
});

$(document).ready(function() {
    $(document).click(function(event) {
        if (
            !$(event.target).closest('.modal-img__block').length &&
            !$(event.target).closest('.product__elem-img').length &&
            $('.modal-img').hasClass('active')
        ) {
            $('.modal-img').toggleClass('active');
            $('body').toggleClass('overflow');
        }
    });
});


$(document).ready(function() {
    $(document).click(function(event) {
        if (
            !$(event.target).closest('.stocks__elem').length &&
            !$(event.target).closest('.swiper-slide').length &&
            $('.modal-action').hasClass('active')
        ) {
            $('.modal-action').toggleClass('active');
            $('body').toggleClass('overflow');
        }
    });
});

$(document).ready(function() {
    $(document).click(function(event) {
        if (
            !$(event.target).closest('.modal-cart__block').length &&
            !$(event.target).closest('.header-menu__cart').length &&
            $('.modal-cart').hasClass('active')
        ) {
            $('.modal-cart').toggleClass('active');
            $('body').toggleClass('overflow');
            $(".modal-back").fadeToggle();
        }
    });
});


$(document).ready(function() {
    $(document).click(function(event) {
        if (
            !$(event.target).closest('.modal-call__block').length &&
            !$(event.target).closest('.open-modal').length &&
            $('.modal-call').hasClass('active')
        ) {
            $('.modal-call').toggleClass('active');
            $('body').toggleClass('overflow');
        }
    });
});



$('.add-cart__btn').on('click', function() {
    $('.modal-add_product .container').append('<div class="modal-add_product__elem" style="display: flex;">Добавлено:<br>'+$(this).closest('.product__elem').find('.title').text()+'</div>')
    setTimeout(function() {
        $('.modal-add_product__elem').last().remove()
    }, 2000); 
})
                  

$(document).ready(function() {
    // Function to toggle 'active' class based on scroll position
    function toggleActiveClass() {
        if ($(window).scrollTop() > 100) {
            $('.arrow-top').addClass('active');
        } else {
            $('.arrow-top').removeClass('active');
        }
    }

    // Check scroll position on page load
    toggleActiveClass();

    // Check scroll position on scroll event
    $(window).scroll(function() {
        toggleActiveClass();
    });

    // Scroll to top on click of .arrow-top
    $('.arrow-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false; // Prevent default action if it's an anchor
    });
});


$(document).ready(function() {
    $('.add-cart__btn').on('click', function() {
        $(this).css('display', 'none');
        $(this).closest('.product__elem-info').append(`
            <div class="product__elem-amount">
                <button class="product__elem-amount-minus">
                    <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="12" height="2" rx="1" fill="#A1A1A1"/>
                    </svg>                                    
                </button>
                <p>1</p>
                <button class="product__elem-amount-plus">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="5" width="12" height="2" rx="1" fill="#3A3A3A" />
                        <rect x="7" width="12" height="2" rx="1" transform="rotate(90 7 0)" fill="#3A3A3A" />
                    </svg>
                </button>
            </div>
        `);
    });

    // Event delegation for dynamically added elements
    $(document).on('click', '.product__elem-amount-plus', function() {
        var countElem = $(this).closest('.product__elem-amount').find('p');
        var count = Number(countElem.text()) + 1;
        countElem.text(count);

        if (count > 1) {
            $(this).closest('.product__elem-amount').find('.product__elem-amount-minus rect').css('fill', '#3A3A3A');
        }
    });

    $(document).on('click', '.product__elem-amount-minus', function() {
        var countElem = $(this).closest('.product__elem-amount').find('p');
        var count = Number(countElem.text()) - 1;

        if (count > 0) {
            countElem.text(count);

            if (count === 1) {
                $(this).find('rect').css('fill', '#A1A1A1');
            }
        }
    });
});

function isScreenLessThan430() {
    return window.innerWidth < 784;
}

$('.number-select__block svg').on('click', function() {
    if (isScreenLessThan430()) {
        if ($('.time-work').css('display') == 'none') {
            $('.time-work').css('display', 'flex');
        } else {
            $('.time-work').css('display', 'none');
        }
    }
})

$(document).ready(function() {
    $('input[name="order-radio"]').change(function() {
      $('.modal-cart__order-radio label div:first-child').removeClass('active');
  
      $(this).siblings('div').addClass('active');
    });
  
    $('input[name="order-radio"]:checked').siblings('div').addClass('active');
});
  

$(document).ready(function() {
    $('.modal-cart__order-input textarea').on('input', function() {
      $(this).css('height', 'auto');
      $(this).css('height', this.scrollHeight + 'px');
    });
  
    $('.modal-cart__order-input textarea').each(function() {
      $(this).css('height', this.scrollHeight + 'px');
    });
});

$(document).ready(function() {
    if (!isScreenLessThan430()) {
    $('.toggle-arrow, .time-work').hover(
        function() {
            $('.toggle-arrow').addClass('rotate');
            $('.time-work').addClass('active');
        },
        function() {
            $('.toggle-arrow').removeClass('rotate');
            $('.time-work').removeClass('active');
        }
    );
}
});
