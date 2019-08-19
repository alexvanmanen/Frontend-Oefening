function hallo() {
  var a = 2;
  var b = 3 + a;
  document.getElementById('test').innerHTML='hallo '+ b;
}

function hallo(id){
  if(id == "test"){
    alert("test");
  }
  document.getElementById(id).innerHTML="Dit was het element: " + id;
}

function validatePassword(username, password){
  if(username == "alex" && password == "voetbal") {
    return true;
  } else {
    return false;
  }
}
