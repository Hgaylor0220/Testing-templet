 import { GalacticCalculator } from './../src/galactic-cal.js'

 describe('GalacticCalculator', function() {
     //first test to fail
     it('should expect to fail/if it returns correct value of the age', function() {
       let age = 23;
       const galacticCalulation = new GalacticCalculator(age);


       expect(galacticCalulation.age).toEqual(23)
     })
   })
   describe('GalacticCalculator', function() {
       //first test to fail
       it('should expect to pass if it returns user age in mercury years', function() {
         let age = 27;
         let galacticCalulation = new GalacticCalculator(age);
         let mercury = new mercuryCal(age);

         expect(mercury.age).toEqual(34)
       })
     })
