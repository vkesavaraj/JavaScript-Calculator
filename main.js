//  Uses jquery 

$(document).ready(function(){
  
  startFresh();
  
  var inputs = [];
  var displayInput;
  var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var operator1 = ["+", "-"];
  var operator2 = ["/", "*"];
  var decimal = ".";
      
  function startFresh(){
    $("#screen").html(0);
    inputs = [];
  }
  
  function getValue(input){
    if(inputs.length == 0){
      if(operator2.includes(input)===false){
        inputs.push(input);
      }
    }else{
      if(operator2.includes(inputs[inputs.length-1])===false){
        inputs.push(input);
      }else if(operator2.includes(inputs[inputs.length-1])===true && !(input==="/" || input==="*")){
        inputs.push(input);
      }
    }
  }
  
  function getTotal(){
    $("#screen").html(eval(inputs.join("")));
    inputs = [];
    }
  
  function update(){
    if(inputs.length == 0){
      $("#screen").html(0);
    }else{
      $("#screen").html(inputs.join(""));
    }
  }
  
  $(".buttons").click(function(){
    console.log();
    if(this.id === "AC"){
      startFresh();
    }else if(this.id === "CE"){
      inputs.pop();
      update();
    }else if(this.id === "total"){
      getTotal();
    }else{
      getValue(this.id);
      update();
      console.log(inputs);
    }
  });
  
  
});
