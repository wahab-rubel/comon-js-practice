function myFunction(){
  const inpObj = document.getElementById('id1');
  if(!inpObj.checkVisibility()){
    document.getElementById('demo').innerHTML = inpObj.validationMessage;
  }
}