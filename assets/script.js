function openMenu(evt, menuName){
  var i;
  var x;
  var tablinks;
  x = document.querySelector("#menu");

  for (i= 0; i < x.length; i++){
    x[i].style.display= "none";
  }

  tablinks = document.querySelector(".tablink");
  for (i=0; i < x.length; i++){
    tablinks[i].className = tablinks[i].className.replace("menu-red", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.firstElementChild.className += "menu-red";
}
document.getElementById("myLink").click();
