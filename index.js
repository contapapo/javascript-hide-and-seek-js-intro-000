function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
  }
}

function deepestChild() {
  var gNode = document.querySelector('#grand-node');
  var deep = gNode.children[0];

  for (var i = 0; i < deep.length; i++) {
    deep = deep.children[i]
  }
  return deep;
}
