var operators=['/','*','-','+','.'];

function calculate(value){
  var result=document.getElementById("result");
  var lastChar = result.value.slice(-1);
  
  if((operators.includes(value)&&operators.includes(lastChar))||(value==='.'&& lastChar==='.')){
    return;
  }
  if(result.value==='0'&&value!=='.'){
    result.value=value;
  }else{
    result.value += value;
  }
}

function calculateResult(){
  var result=document.getElementById("result");
  result.value=eval(result.value);
}

function clearResult(){
  var result =document.getElementById("result");
  result.value="";
}
