function main() {
    question.innerHTML = 'What style of main dish are you enjoying?';
    pair.drawButton('Meats', meat, 'Veggies', veggie, 'Pasta', pasta);
}

function meat() {
    question.innerHTML = 'What type of protein are you enjoying?';
    pair.drawButton('Surf', surf, 'Terf', terf, 'Poultry', poultry);
}

// *******  Seafood ********

function surf() {
    question.innerHTML = 'What type of seafood are you enjoying?';
    pair.drawButton('Shellfish', shellfish, 'White Fish', whiteFish, 'Salmon / Ahi', salmonAhi);
}
function shellfish() {
    question.innerHTML = 'What type of shellfish are you enjoying?';
    pair.drawButton('Crab / Lobster', crabLobster, 'Shrimp / Crayfish', shrimpCrayfish, 'Clam / Mussel / Oyster', biValves);
}
function crabLobster() {
    question.innerHTML = 'Is the dish...';
    pair.drawButton('Butter or Cream Driven', crabButter, 'Salad or Fruit Driven', crabSalad, 'Robust or Spicy', crabRobust);
}
function shrimpCrayfish() {
    question.innerHTML = 'Is the dish...';
    pair.drawButton('Butter or Cream Driven', shrimpButter, 'Salad or Fruit Driven', shrimpSalad, 'Robust or Spicy', shrimpRobust);
}
function biValves() {
    question.innerHTML = 'Is the dish...';
    pair.drawButton('Butter or Cream Driven', butterBi, 'Salad or Raw', shrimpSalad, 'Robust or Spicy', biSpicy);
}
function whiteFish() {

}
function salmonAhi() {

}
function  crabButter() {
    pair.results.push("Oakey Chardonnay to compliment the butter and richness");
    pair.results.push("Not Oakey Chardonnay to provide some bright acid and minerality to pair");
    pair.results.push("Sauvignon Blanc to provide some bright acid and grassy/citrus notes to pair");
    pair.results.push("Sparkling Wine to lift and cleanse the pallet in between bites");
    pair.results.push("Pinto Gris/Grigio to provide elegant apple and mineral notes");
    showResults();
}
function crabSalad() {
    pair.results.push("Albarino to provide floral and mineral notes playing with delicate flavors");
    pair.results.push("Not Oakey Chardonnay to provide some bright acid and minerality to pair");
    pair.results.push("Sauvignon Blanc to provide some bright acid and grassy/citrus notes to pair");
    pair.results.push("Sparkling Wine to lift and cleanse the pallet in between bites");
    pair.results.push("Pinto Gris/Grigio to provide elegant apple and mineral notes");
    pair.results.push("Riesling to compliment the sweetness in the shellfish");
    showResults();
}
function crabRobust() {
    pair.results.push("Not Oakey Chardonnay to provide some bright acid and minerality to pair");
    pair.results.push("Sauvignon Blanc to provide some bright acid and soften the richness");
    pair.results.push("Sparkling Wine to lift and cleanse the pallet in between bites");
    pair.results.push("Pinto Noir to give acid to lighten the richness and red fruit to brighten the dish");
    pair.results.push("Chianti to provide gentle tannin to play with the richness, bright fruit to liven the bited");
    pair.results.push("Gewurtztraminer to provide floral and stone fruit notes, and a little sweetness to play with spice");
    showResults();
}
function  shrimpButter() {
    pair.results.push("Chenin Blanc to provide richness and rich fruit to compliment the shrimp");
    pair.results.push("Rose to provide acid to cut the richness and light fruit to compliment the shrimp");
    pair.results.push("Not Oakey Chardonnay to provide some bright acid and minerality to pair");
    pair.results.push("Sauvignon Blanc to provide some bright acid and grassy/citrus notes to pair");
    pair.results.push("Sparkling Wine to lift and cleanse the pallet in between bites");
    pair.results.push("Pinto Gris/Grigio to provide elegant apple and mineral notes");
    pair.results.push("Riesling to compliment the sweetness in the shrimp");
    showResults();
}
function shrimpSalad() {
    pair.results.push("Albarino to provide floral and mineral notes playing with delicate flavors");
    pair.results.push("Rose to provide acid to cut the richness and light fruit to compliment the shrimp");
    pair.results.push("Sparkling Wine to lift and cleanse the pallet in between bites");
    pair.results.push("Pinto Gris/Grigio to provide elegant apple and mineral notes");
    pair.results.push("Riesling to compliment the sweetness in the shellfish");
    showResults();
}
function shrimpRobust() {
    pair.results.push("Chenin Blanc to provide richness and rich fruit to compliment the shrimp");
    pair.results.push("Rose to provide acid to cut the richness and light fruit to compliment the shrimp");
    pair.results.push("Not Oakey Chardonnay to provide some bright acid and minerality to pair");
    pair.results.push("Sauvignon Blanc to provide some bright acid and grassy/citrus notes to pair");
    pair.results.push("Pinto Noir to give acid to lighten the richness and red fruit to brighten the dish")
    pair.results.push("Riesling to compliment the sweetness in the shrimp and spice in the dish");
    pair.results.push("Gewurtztraminer to provide floral and stone fruit notes, and a little sweetness to play with spice");
    showResults();
}

// ******** Land Meat *********

function terf() {

}
function poultry() {

}
function veggie() {
    question.innerHTML = 'What style of vegetables are you enjoying?';
    pair.drawButton('Root Veggies', root, 'Green Veggies', green, 'Squash', squash);
}
function root() {
    question.innerHTML = 'What root vegetables are you enjoying?';
    pair.drawButton('Sweet (Yams/Carrots)', redPasta, 'White Sauce', whitePasta, 'Something Else', otherPasta);
}
function green() {

}
function squash() {

}
function pasta() {
    question.innerHTML = 'What style of pasta are you enjoying?';
    pair.drawButton('Red Sauce', redPasta, 'White Sauce', whitePasta, 'Something Else', otherPasta);
}
function redPasta() {

}
function whitePasta() {

}
function otherPasta() {

}
function cheese() {
    question.innerHTML = 'What style of cheese are you enjoying?';
    pair.drawButton('Creamy', creamyCheese, 'Hard', hardCheese, 'Blue', blueCheese);
}
function creamyCheese() {

}
function hardCheese() {

}
function blueCheese() {

}
function apps() {
    question.innerHTML = 'What style of appetizer are you enjoying?';
    pair.drawButton('Fried', fried, 'Chilled', chilled, 'Warm', warm);
}
function fried() {

}
function chilled() {

}
function warm() {

}
function dessert() {
    question.innerHTML = 'What style of dessert are you enjoying?';
    pair.drawButton('Fruit Focused', meat, 'Rich and Intense', veggie, 'Cheeses', cheese);
}


function foodPair() {
    question.innerHTML = 'What kind of food would you like to pair your wine with?';
    pair.drawButton('Appetizers', apps, 'Main Course', main, 'Desserts', dessert);
}
