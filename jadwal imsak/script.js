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