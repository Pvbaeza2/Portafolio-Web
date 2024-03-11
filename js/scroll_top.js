window.onscroll=function(){
    if(document.documentElement.scrollTop>100){
        document.querySelector('.scroll_top_container').classList.add('show')
    }else{
        document.querySelector('.scroll_top_container').classList.remove('show')
    }
}

document.querySelector('.scroll_top_container').addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    });
});