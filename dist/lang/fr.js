require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./lang/fr":[function(require,module,exports){
module.exports = {
  accepted: 'Le champ :attribute doit être accepté.',
  alpha: 'Le champ :attribute ne peut contenir que des caractères alphabétiques.',
  alpha_dash: 'Le champ :attribute ne peut contenir que des caractères alphanumériques, des tirets et underscores.',
  alpha_num: 'Le champ :attribute doit être alphanumérique.',
  between: 'Le champ :attribute doit être compris entre :min and :max.',
  confirmed: 'Le champ :attribute ne correspond pas.',
  email: 'Le champ :attribute contient un format invalide.',
  def: 'Le champ :attribute contient un attribut erroné.',
  digits: 'Le champ :attribute doit être de :digits chiffres.',
  different: 'Le champ :attribute et :different doivent être differents.',
  'in': 'Le champ :attribute est invalide.',
  integer: 'Le champ :attribute doit être un entier.',
  min: {
    numeric: 'Le champ :attribute doit être supérieur à :min.',
    string: 'Le champ :attribute doit contenir au moins :min caractères.'
  },
  max: {
    numeric: 'Le champ :attribute doit être inférieur à :max.',
    string: 'Le champ :attribute doit contenir au plus :max caractères.'
  },
  not_in: 'Le champ :attribute est invalide.',
  numeric: 'Le champ :attribute ne peut contenir que des caractères numériques.',
  required: 'Le champ :attribute est obligatoire.',
  required_if: 'Le champ :attribute est obligatoire quand :other est :value.',
  same: 'Les champs :attribute et :same doivent correspondre.',
  size: {
    numeric: 'Le nombre :attribute doit contenir :size chiffres.',
    string: 'Le champ :attribute contenir exactement :size caractères.'
  },
  url: 'Le format du champ :attribute est invalide.',
  regex: 'Le format du champ :attribute est invalide.',
  attributes: {}
};

},{}]},{},[]);
