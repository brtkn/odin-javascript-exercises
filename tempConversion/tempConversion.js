const ftoc = function(givenNumber) {

  const tempature = Math.round(((givenNumber - 32 ) * 5/9) * 10);
  
  return tempature/10;

}

const ctof = function(givenNumber) {

    const tempature = Math.round((givenNumber * 9/5 + 32) * 10);

    return tempature/10;
}

module.exports = {
  ftoc,
  ctof
}
