(function () {
    'use strict'
    document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
      document.querySelector('.offcanvas-collapse').classList.toggle('open')
    })
})()
$(document).ready(function() {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
      responsive: {
          0: {
              items: 1
          },
          768: {
              items: 2
          },
          992: {
              items: 4
          }
      },
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 1000,
      autoplayHoverPause: true
  });
});
  
    // Xóa một hàng
const deleteButtons = document.querySelectorAll('.delete-item');
deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
        const row = button.closest('tr');
        row.remove();
    });
});
    
    // Tăng giảm số lượng
const quantityInputs = document.querySelectorAll('.quantity-input');
quantityInputs.forEach(input => {
    const decreaseButton = input.querySelector('.decrease-quantity');
    const increaseButton = input.querySelector('.increase-quantity');
    const quantityInput = input.querySelector('.quantity');
      
decreaseButton.addEventListener('click', () => {
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity;
    }
});
      
increaseButton.addEventListener('click', () => {
        let quantity = parseInt(quantityInput.value);
        quantity++;
        quantityInput.value = quantity;
    });
});

function changeImage(element) {

    var main_prodcut_image = document.getElementById('main_product_image');
    main_prodcut_image.src = element.src;
    

}
 // Lấy danh sách các trang
 const pages = Array.from(document.getElementsByClassName('page'));
      
// Hàm hiển thị trang theo ID
function showPage(pageId) {
    for (let i = 0; i < pages.length; i++) {
        if (pages[i].id === pageId) {
            pages[i].style.display = 'block';
        } else {
            pages[i].style.display = 'none';
        }
    }
}
      
// Hiển thị trang mô tả khi trang được tải lần đầu
showPage('description');