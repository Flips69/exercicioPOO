"use strict";
var DiasDasemana;
(function (DiasDasemana) {
    DiasDasemana["Segunda"] = "Segunda Feira";
    DiasDasemana["Ter\u00E7a"] = "Ter\u00E7a Feira";
    DiasDasemana["Quarta"] = "Quarta Feira";
    DiasDasemana["Quinta"] = "Quinta Feira";
    DiasDasemana["Sexta"] = "Sexta Feira";
    DiasDasemana["Sabado"] = "Sabado";
    DiasDasemana["Domingo"] = "Domingo";
})(DiasDasemana || (DiasDasemana = {}));
let diaHoje = DiasDasemana.Sexta;
//console.log("Hoje é " + DiasDasemana[diaHoje]);
console.log("Hoje é " + diaHoje);
