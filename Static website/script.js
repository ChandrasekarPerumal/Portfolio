console.log('Its Working')


let themeDots = document.getElementsByClassName("theme-dot")


for(var i=0;themeDots.length>i;i++){
  themeDots[i].addEventListener('click', function(){
    let mode= this.dataset.mode
    console.log('Option clicked:', mode)
    setThemee(mode)
  })
}


function setThemee(mode){

  if(mode == 'light'){
  document.getElementById('theme-style a').href='default.css'
  }

  if(mode == 'blue'){
  document.getElementById('theme-style a').href='blue.css'
  }

  if(mode == 'green'){
  document.getElementById('theme-style').href='green.css'
  }

  if(mode == 'purple'){
  document.getElementById('theme-style').href='purple.css'
  }

}



<script>

var topButton=document.getElementById("topBtn");

window.onscroll=function(){
  scrollFunction()
};


function scrollFunction(){
  if(document.body.scrollTop>20||document.documentElement.scrollTop>20){
    topButton.style.display="block";
  }
  else {
    topButton.style.display="none";
  }
}

function topFunction{
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
}

</script>
