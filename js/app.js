window.onload = function() {
  function processForm(e) {
    e.preventDefault();

    var form = e.target;
    var letters = Array.prototype.map.call(form.letters,
      function(txtBox) { return txtBox.value.toLowerCase(); }
    ).join('');
    var wordLen = form.num.value;

    var answersList = document.getElementById('answers');

    if (answersList.hasChildNodes()) {
      while (answersList.childNodes.length >= 1) {
        answersList.removeChild(answersList.firstChild);
      }
    }

    var words = permutate.getPermutations(letters, wordLen).getUnique();
    words.forEach( function(word) {
      if (binarySearch(wordList, word)) {
        var li = document.createElement('li');
        li.innerHTML = word;
        answersList.appendChild(li);
      }
    });

    return false;
  }

  var form = document.getElementById('theform');
  if (form.attachEvent) {
    form.attachEvent("submit", processForm);
  } else {
    form.addEventListener("submit", processForm);
  }
}

