var testObject = {
    "idDrink": "11007",
    "strDrink": "Margarita",
    "strDrinkAlternate": null,
    "strDrinkES": null,
    "strDrinkDE": null,
    "strDrinkFR": null,
    "strDrinkZH-HANS": null,
    "strDrinkZH-HANT": null,
    "strTags": "IBA,ContemporaryClassic",
    "strVideo": null,
    "strCategory": "Ordinary Drink",
    "strIBA": "Contemporary Classics",
    "strAlcoholic": "Alcoholic",
    "strGlass": "Cocktail glass",
    "strInstructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
    "strInstructionsES": null,
    "strInstructionsDE": "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der äußere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genießers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schütteln und vorsichtig in das Glas geben.",
    "strInstructionsFR": null,
    "strInstructionsZH-HANS": null,
    "strInstructionsZH-HANT": null,
    "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
    "strIngredient1": "Tequila",
    "strIngredient2": "Triple sec",
    "strIngredient3": "Lime juice",
    "strIngredient4": "Salt",
    "strIngredient5": null,
    "strIngredient6": null,
    "strIngredient7": null,
    "strIngredient8": null,
    "strIngredient9": null,
    "strIngredient10": null,
    "strIngredient11": null,
    "strIngredient12": null,
    "strIngredient13": null,
    "strIngredient14": null,
    "strIngredient15": null,
    "strMeasure1": "1 1/2 oz ",
    "strMeasure2": "1/2 oz ",
    "strMeasure3": "1 oz ",
    "strMeasure4": null,
    "strMeasure5": null,
    "strMeasure6": null,
    "strMeasure7": null,
    "strMeasure8": null,
    "strMeasure9": null,
    "strMeasure10": null,
    "strMeasure11": null,
    "strMeasure12": null,
    "strMeasure13": null,
    "strMeasure14": null,
    "strMeasure15": null,
    "strCreativeCommonsConfirmed": "Yes",
    "dateModified": "2015-08-18 14:42:59"
}
localStorage.setItem("info", JSON.stringify(testObject));

//makes sure only one type of search term is passed on
function clearTerms() {
    localStorage.removeItem("termI");
    localStorage.removeItem("termA");
    localStorage.removeItem("termS");
    return;
}

//sends you back to the home page and runs new search
$("#searchIngridient").on("click", function () {
    var term = $("#termIngridient").val();
    console.log(term);
    window.location.href = "../index.html";
    clearTerms();
    localStorage.setItem("termI", term);
    localStorage.setItem("searchFlag", true);
});
$("#searchAlcohol").on("click", function () {
    var term = $("#termAlcohol").val();
    console.log(term);
    window.location.href = "../index.html";
    clearTerms();
    localStorage.setItem("termA", term);
    localStorage.setItem("searchFlag", true);
});
$("#searchSomething").on("click", function () {
    var term = $("#termSomething").val();
    console.log(term);
    window.location.href = "../index.html";
    clearTerms();
    localStorage.setItem("termS", term);
    localStorage.setItem("searchFlag", true);
});

//displays the info.
function detailedInfo() {
    //Get the info I need from local storage
    var info = JSON.parse(localStorage.getItem('info'));
    var name = info.strDrink;
    var instructions = info.strInstructions;
    var alcoholic = info.strAlcoholic;
    var glass = info.strGlass;
    var img = info.strDrinkThumb;
    var classification = info.strIBA;
    var category = info.strCategory;
    var ingredients = [];
    var measurements = [];
    for (i = 1; i < 16; i++) {
        var ingredient = eval('info.strIngredient' + i);
        if (ingredient != null) {
            ingredients.push(ingredient);
        }
    }
    for (i = 1; i < 16; i++) {
        var measurement = eval('info.strMeasure' + i);
        if (measurement != null) {
            measurements.push(measurement);
        }
    }
    //create the html elements
    var infoEL = $("<div>");
    infoEL.attr("class", "infoBox");
    var nameEL = $("<h2>");
    nameEL.attr("class", "name");
    var instructionsEL = $("<p>");
    instructionsEL.attr("class", "instructions");
    var alcoholicEL = $("<p>");
    alcoholicEL.attr("class", "alcoholic");
    var glassEL = $("<p>");
    glassEL.attr("class", "glass");
    var classificationEL = $("<p>");
    classificationEL.attr("class", "classification");
    var categoryEL = $("<p>");
    categoryEL.attr("class", "category");
    var imgEL = $("<img>");
    //add content to element
    nameEL.text(name);
    instructionsEL.text(instructions);
    alcoholicEL.text(alcoholic);
    glassEL.text(glass);
    classificationEL.text(classification);
    categoryEL.text(category);
    imgEL.attr("src", img);
    //append to infoBox
    infoEL.append(nameEL);
    infoEL.append(imgEL);
    infoEL.append(instructionsEL);
    infoEL.append(alcoholicEL);
    infoEL.append(glassEL);
    infoEL.append(classificationEL);
    infoEL.append(categoryEL); 
    //for ingredients and measurments its running in a for loop in the append section
    for (i = 0; i < ingredients.length; i++) {
        var ingredientsEL = $("<p>");
        ingredientsEL.attr("class", "ingredients");
        ingredientsEL.text(ingredients[i]);
        infoEL.append(ingredientsEL);
    }
    for (i = 0; i < measurements.length; i++) {
        var measurementsEL = $("<p>");
        measurementsEL.attr("class", "measurements");
        measurementsEL.text(measurements[i]);
        infoEL.append(measurementsEL);
    }
    $("body").append(infoEL);
}


detailedInfo();