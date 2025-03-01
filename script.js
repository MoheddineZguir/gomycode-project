document.addEventListener('DOMContentLoaded', function() {
    var products = document.querySelectorAll('.card');
    products.forEach(function(pr) {
        var heartBtn = pr.querySelector('.fa-heart')
        var plusBtn = pr.querySelector('.fa-plus-circle')
        var minusBtn = pr.querySelector('.fa-minus-circle')
        var trashBtn = pr.querySelector('.fa-trash-alt')
        var z = pr.querySelector('.quantity')
        var m = false








        heartBtn.addEventListener('click' , function () {
            // if(m === false){
            //     heartBtn.style.color = 'red'
            //     m = true
            // }else{
            //     heartBtn.style.color = 'black'
            //     m=false
            // }
            heartBtn.classList.toggle('liked')
        })

        plusBtn.addEventListener('click', function () {
          z.textContent =  Number(z.textContent) + 1
        })


        minusBtn.addEventListener('click', function () {
            if (Number(z.textContent)>0){
                z.textContent =  Number(z.textContent) - 1
            }
          })

          trashBtn.addEventListener('click' , function () {
            pr.remove()
            // z.textContent = 0
          })
          
    });

});