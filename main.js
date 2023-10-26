function calculate(value){
  var result=document.getElementById("result");
  //最後の１文字を取得
  var lastChar = result.value.slice(-1);
  
  if((value==='/'||value==='*'||value==='-'||value==='+')&&(lastChar==='/'||lastChar==='*'||lastChar==='-'||lastChar==='+')||(value==='.'&&lastChar==='.')){
    return;
  }
  result.value += value;
}

function calculateResult(){
  var result=document.getElementById("result");
  result.value=eval(result.value);
}

function clearResult(){
  var result =document.getElementById("result");
  result.value="";
}
