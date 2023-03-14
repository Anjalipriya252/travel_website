let videoBtn = document.querySelectorAll('.vid-btn');

videoBtn.forEach(btn =>{
    btn.addEventListener('click' , ()=>{
        document.querySelector('.acontrols .active').classList.remove('active');
        btn.classList.add('active');
let src = btn.getAttribute('data-src');
document.querySelector('#video-slider').src = src;
    });
});
