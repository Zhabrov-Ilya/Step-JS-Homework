"use strict";

let country = {
  name: "Russia",
  capital: {
    name: "Moscow",
    population: 12655050,
    square: 2561,
  },
  languages: ["Russian", "English", "Belarusian", "Armenian"],
  cities: [
    {
      name: "Saint-Petersburg",
      population: 5384342,
      square: 1439,
    },
    {
      name: "Kazan",
      population: 1257341,
      square: 425,
    },
    {
      name: "Omsk",
      population: 1139897,
      square: 572,
    },
  ],
  calcDensity(obj) {
    return obj.population / obj.square;
  },
};

function alertObj(obj) { 
  for(let k in obj) {
    document.writeln(k+": ");

    if(typeof(obj[k]) == 'object' && !Array.isArray(obj[k])) {
      alertObj(obj[k]);
    
    } else if (Array.isArray(obj[k])) {

      for(let i = 0; i < obj[k].length; i++) {
        if(typeof(obj[k][i]) == 'object' && !Array.isArray(obj[k][i])) {
          alertObj(obj[k][i]);

        } else {
          document.write(obj[k][i] + ', ');

          if(i == obj[k].length-1) {
            document.writeln('<br \/>');
          }
        }
      }
    }

    else {
      document.writeln(obj[k]+"\r<br \/>"); 
    }
  } 
} 

alertObj(country);

for (let i = 0; i < country.cities.length; i++) {
  console.log(country.cities[i]);
  document.write(
    `Плотность ${country.cities[i].name}: ` +
      Math.floor(country.calcDensity(country.cities[i])) +
      " чел/км^2 <br/>"
  );
}