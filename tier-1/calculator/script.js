var equal = false;

function bc(fn){
  // tratamento
  fn.replace(/[^-()\d/*+.]/g, '');
  return new Function('return ' + fn)();
}
function insert(num){
  if(equal) {
    clean();
    equal = false;
  }
  document.form.textbox.value = document.form.textbox.value+num;
}
function clean(){
  document.form.textbox.value = '';
}
function total(){
  var x = document.form.textbox.value;
  if(x){
    equal = true;
    document.form.textbox.value = bc(x);
  }
}
function back(){
  var exp = document.form.textbox.value;
  document.form.textbox.value = exp.substring(0, exp.length-1);
}
