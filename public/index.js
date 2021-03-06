'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];


 function Rentalprice(rentals,cars) {
  var time = 0; // J'initialise à 0 la variable time
  for (var i = 0; i < rentals.length; i++) { //On parcours le tableau rentals
    time = new Date(rentals[i].returnDate) - new Date(rentals[i].pickupDate);On recupere la date en créant un objet à partir de la classe Date
    time = time/ (1000*60*60*24); // Conversion du temps de millisecondes en jours
    time++;//On rajoute 1 car pour le meme jour on a une difference egale à 0
    for (var j = 0; j < cars.length; j++) { //On parcours le tableau cars
      if(rentals[i].carId === cars[j].id) { //On verifie que la voiture correspond bien à celle de la location
        rentals[i].price = rentals[i].distance * cars[j].pricePerKm; //On calcul le prix en fonction de la distance
        rentals[i].price =rentals[i].price +( time * cars[j].pricePerDay); //On l'aditionne  le prix calculé en fonction du temps et de la distance pour avoir le prix total
      //Exercice 2
      if(time>1){rental[i].price=rental[i].price*0.9}//Rabais de 10 pourcent
      if(time>4){rental[i].price=rental[i].price*0.7}//Rabais de 30 pourcent
      if(time>10){rental[i].price=rental[i].price*0.5}//Rabais de 50 pourcent
      //Exercice 3
      for (var k = 0; k < commission.length; k++){
          commission=0.3*rentals[i].price;
      var rentals[i].commission[k].insurance=0.5*commission;//Calcul du montant de l'assurance
      var rentals[i].commission[k].assistance=time;//Calcul du montant de la roadside assistance
      var rentals[i].commission[k].drivy=commission-rentals[i].commission[k].insurance-rentals[i].commission[k].assistance;//argent touché par drivy
  }
      
      //Exercice 4
      if(rentals[i].options.deductibleReduction==true){deductibleReduction=rentals[i].price+time*4;}//Calcul du nouveau prix si la deductible reduction est appliquable
      
      //Exercice 5
      for (var k = 0; k < actors.length; k++){//On parcours le tableau actors
          if(rentals[i].Id === actors[k].rentalsId)//On verifie la correspondance des id des deux tableaux
          {
              for (var l = 0; l < payment.length; l++)//On parcours le tableau payment
              if (l==0){
                  actors[k].rentalsId.payment[0]=rentals[i].price+deductibleReduction // Caclul pour the driver
                          
              }
                if (l==1){
                  actors[k].rentalsId.payment[l]=rentals[i].price-commission;// Caclul pour the owner
                          
              }
                    if (l==2){
                  actors[k].rentalsId.payment[2]=rentals[i].commission[k].insurance=0.5*commission;// Caclul pour the insurance
                          
              }
                        if (l==3){
                  actors[k].rentalsId.payment[3]=rentals[i].commission[k].assistance;// Caclul pour the assistance
                          
              }
                            if (l==4){
                  actors[k].rentalsId.payment[4]=rentals[i].commission[k].drivy+deductibleReduction;// Caclul pour the drivy receives
                          
              }
  
              
          }
          
      }
      
  }
     
      
      
      
      
      
  }
      
                  
    }
  }


console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);


/*Exercice 6
Il faut faire une nouvelle boucle for pour parcourir rentalModifications
Il faut verifier que 'rentalId' est le meme que l'id de rentals à l'aide d'un if puis a l'aide d'egalités comme precedemment on modifie la valeur correspondante dans le tableau rentals.
 */