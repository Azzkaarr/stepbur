window.onscroll = () =>{

  searchForm.classList.remove('active');

  if(window.scrollY > 80){
    document.querySelector('.nav3 .navbar3').classList.add('active');
  }else{
    document.querySelector('.nav3 .navbar3').classList.remove('active');
  }

}

window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.nav3 .navbar3').classList.add('active');
  }else{
    document.querySelector('.nav3 .navbar3').classList.remove('active');
  }

  fadeOut();

}

const totop = document.querySelector(".fa-arrow-up");
window.addEventListener("scroll",() =>{
if(window.pageYOffset>100){
  totop.classList.add("active");
}else{
  totop.classList.remove("active");
}
})
/*LOWDER*/
function loader(){
document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
setTimeout(loader, 3000);
}
/*galletry*/
function myfunction(smallimg){
var fullomg = document.getElementById("imgbox");
fullomg.src=smallimg.src;
}