function getFirstSelector(selector){
  var selector = document.querySelector(selector);
  return selector;
}

function nestedTarget(){
  var selector = document.querySelector('#nested', '.target')
  return selector;
}

function increaseRankBy(n){
  var selector = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < selector.length; i++){
   selector[i].innerHTML = (parseInt(selector[i].innerHTML) + n);
  }
}

function deepestChild(){
  var selector = document.getElementById('grand-node').querySelectorAll('div');
  var i = selector.length - 1;
   return  selector[i];
}
