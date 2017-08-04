// ===============================
// CHAPTER 5: ELOQUENT JAVASCRIPT
// ===============================

// ===========================
// Mother-child age difference
// ===========================
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.
function hasKnownMother(person) {
  return byName[person.mother] != null;
}

var ages = ancestry.filter(hasKnownMother).map(function(person) {
  return person.born - (byName[person.mother]).born;
});
console.log(average(ages));
// → 31.2


// ==========================
// Historical life expectancy
// ==========================

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// Your code here.
function groupBy(array, groupOf) {
  var groups = {};
  array.forEach(function(element) {
    // get the group name (which is the century)
    // for each person / element
    var groupName = groupOf(element);
    // push the element into the object, as per its groupName
    // only if the century (groupName) already exists
    // otherwise create the century in the object
    if (groupName in groups) {
      groups[groupName].push(element);
    } else {
      groups[groupName] = [element];
    }
  });
  return groups;
}

function groupOf(person) {
  return Math.ceil(person.died / 100);
}

var byCentury = groupBy(ancestry, groupOf);

for (var century in byCentury) {
  var ages = byCentury[century].map(function(person) {
    return person.died - person.born;
  });
  console.log(century + ": " + average(ages));
}

console.log(byCentury);

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94



// ===================
// Every and then some
// ===================
// Your code here.
function every(array, test) {
  for (var i = 0; i < array.length; i++) {
    if (!test(array[i])) return false;
  }
  return true;
}

function some(array, test) {
  for (var i = 0; i < array.length; i++) {
    if (test(array[i])) return true;
  }
  return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
