function binarySearch(list, value) {
  var start = 0;
  var stop  = list.length - 1;
  var pivot = Math.floor((start + stop) / 2);

  while (list[pivot] != value && start < stop) {
    if ( value < list[pivot]) { stop  = pivot - 1; }
    if ( value > list[pivot]) { start = pivot + 1; }

    pivot = Math.floor((start + stop) / 2);
  }

  return list[pivot] == value;
}

// http://jinwolf.tumblr.com/post/26476479113/draw-something-cheat
var permutate = (function() {
  var results = [];

  function doPermute(input, output, used, size, level) {
    if (size == level) {
      var word = output.join('');
      results.push(word);
      return;
    }

    level++;

    for (var i = 0; i < input.length; i++) {
      if (used[i]) {
        continue;
      }
      used[i] = true;
      output.push(input[i]);
      doPermute(input, output, used, size, level);
      used[i] = false;
      output.pop();
      }
    }

    return {
      getPermutations: function(input, size) {
        results = [];
        var chars = input.split('');
        var output = [];
        var used = new Array(chars.length);
        doPermute(chars, output, used, size, 0);
        return results;
      }
    }
})();

// http://stackoverflow.com/questions/1960473/unique-values-in-an-array
Array.prototype.getUnique = function(){
  var u = {}, a = [];
  for(var i = 0, l = this.length; i < l; ++i){
    if(u.hasOwnProperty(this[i])) {
      continue;
    }
    a.push(this[i]);
    u[this[i]] = 1;
  }
  return a;
}

