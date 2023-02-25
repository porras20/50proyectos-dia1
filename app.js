const container = document.querySelector('.container')
const card = document.querySelectorAll('.card');


container.addEventListener('click', (e)  =>{
   if (e.target.className === 'img') {
        card.forEach(element => {
            element.classList.contains('active') ? 
            element.classList.remove('active') : null
        });
        e.target.parentElement.classList.add('active');
   }
})