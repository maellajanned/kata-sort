function compare(a,b){
return a.age-b.age;}
function sortPeople(people) {
  if (!Array. isArray(people) || people.length===0){return null;}
  /*else if (people.length===0) {return null;
  }*/
else {return people.sort(compare)}
}
module.exports = sortPeople;
