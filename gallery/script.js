if(localStorage.getItem('tema') == 'dark'){
    myGelap(true)
}else(
    myGelap(false)
)

function myGelap(isDark){
    if(isDark){
        document.body.setAttribute('id', 'dark')
        localStorage.setItem('tema', 'dark')
    }else{
        document.body.setAttribute('id', '')
        localStorage.removeItem('tema')
    }
}

// my modal klik
document.addEventListener("click", function(e){
    if(e.target.classList.contains('gallery-item')){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
})
// akhir modal