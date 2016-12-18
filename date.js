//this file offer a option to use 'date' like php.
function date(format, timestamp){
  var i=-1;
  var time;
  var buffer = "";
  function Container(){
    function Con(test){
      return typeof this[test] != "undefined";
    }
    this.containes = Con;
  }
  var container = new Container();
  while(format.length-1 > i){
    i++;
    if(container.containes(format.charAt(i))){
       buffer += container[format.charAt(i)](time);
    }else{
       buffer += format.charAt(i);
    }
  }
  return buffer;
}
