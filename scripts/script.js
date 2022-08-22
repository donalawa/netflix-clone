let faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(ele => {

    ele.addEventListener("click", (e) => {
        faqItems.forEach((item) => {
            if(e.target.parentElement.parentElement.classList.contains('active')) {
               
            }else {
                item.classList.remove('active');
            }
            
          
        })

        if(e.target.type == 'submit') {
            e.target.parentElement.parentElement.classList.toggle('active')
        }else {
            e.target.parentElement.parentElement.parentElement.classList.toggle('active');
        }
    })

})

