var burritoForm = document.getElementById("burritoForm");
var displayBurrito = document.getElementById("burritoResult");
burritoForm.addEventListener("submit", function(event){
  var data = new FormData(burritoForm);
  var rice = data.get("rice");
  var beans = data.get("beans");
  var burritotopping = data.getAll("topping");
  var protein = data.get("protein");
  
  sessionStorage.setItem("burritotoppings", burritotopping);
 
  sessionStorage.setItem("burritoRice", rice);
  sessionStorage.setItem("burritoBeans", beans);
  sessionStorage.setItem("burritoProtein", protein);
  
  event.preventDefault();
});



var bowlForm = document.getElementById("bowlForm");
var displayBowl = document.getElementById("bowlResult");
bowlForm.addEventListener("submit", function(event){
  var bowlData = new FormData(bowlForm);
  var bowlRice = bowlData.get("rice");
  var bowlBeans = bowlData.get("beans");
  var bowlTopping = bowlData.getAll("topping");
  var bowlProtein = bowlData.get("protein");

  sessionStorage.setItem("bowltoppings", bowlTopping);

  sessionStorage.setItem("bowlRice", bowlRice);
  sessionStorage.setItem("bowlBeans", bowlBeans);
  sessionStorage.setItem("bowlProtein", bowlProtein);

  event.preventDefault();
});
