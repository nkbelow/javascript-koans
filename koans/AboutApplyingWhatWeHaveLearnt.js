var _; // globals

describe("About Applying What We Have Learnt", function() {
  var products;

  beforeEach(function () { 
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {
    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {
      var productsICanEat = [];

      /* solve using filter() & all() / any() */
      //for this I would filter so that products[i].containsNuts = false and then 
      //make sure that mushrooms were not contained in ingredients using all or any

      expect(productsICanEat.length).toBe(FILL_ME_IN);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {
    var sum = 0;

    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    
    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {
    var sum = 233168;    /* try chaining range() and reduce() */

    expect(233168).toBe(_.range(1, 1000).reduce(function(a,b) {
      if (b % 3 === 0 || b % 5 === 0) {
        return a + b;
      }
      else {
        return a;
      }
    });
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2;
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* chain() together map(), flatten() and reduce() */

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  /*
  it("should find the largest prime factor of a composite number", function () {
    //to solve would have to create list of all prime numbers less than composite number
    //find largest number in that prime array that is a factor of composite number and then return
  
  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
    // not exactly sure what this question is asking. If I understand correctly then we would multiply
    two numbers together and then create all possible rearragement of numbers. Then test each to see if palindrome
    and then return largest palindrome from our list of palindromes
  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {
    //have array of numbers through 1-20 and test all of the numbers to see if num%(number in 1-20 list) === 0
    //start off with 21 and use a while loop to increase until we get our number
      
    
  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {
    //function should take two arguments add sum of squares and square the sum and then add subtract to find the diff
    
  });

  it("should find the 10001st prime", function () {
    //create array of primes until length is 10000. Then return numbers at array[10000]git 

  });
  */
});
