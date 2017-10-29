var CreationTableauLangages = function () {
var result = ['Html', 'CSS', 'Java', 'PHP'];
  return result;
}

var CreationTableauNombres = function () {
var result = [0,1,2,3,4,5];
    return result;
}

var RemplacementElement = function (langages) {
  langages[2]='Javascript';
  return langages;
}

var AjoutElementLangages = function (langages) {
  langages.push('Ruby', 'Python');
  return langages;
}

var AjoutElementNombres = function (nombres) {
  nombres.unshift(-2,-1);
  return nombres;
}

var SuppressionPremierElement = function (langages) {
langages.shift()
  return langages;
}

var SuppressionDernierElement = function (langages) {
langages.pop()
  return langages;
}

var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
var reseaux_sociaux=reseaux_sociaux_chaine.split(',');
  return reseaux_sociaux;
}

var ConversionTableauChaine = function (langages) {
var result = langages.join();
  return result;
}

var TriTableau = function (reseaux_sociaux) {
var result = reseaux_sociaux.sort();
  return result;
}

var InversionTableau = function (reseaux_sociaux){
reseaux_sociaux.reverse();
  return reseaux_sociaux;
}
