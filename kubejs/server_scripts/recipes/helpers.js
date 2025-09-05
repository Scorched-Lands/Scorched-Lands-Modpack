function makeJsonIngredients(inputs) {
  let finalInputs = [];
  for (let input of inputs) {
    let ingredient = "";
    if (typeof input == "object" && input.class) {
      ingredient = input;
    } else if (typeof input == "string") {
      if (input.includes("#")) {
        ingredient = Ingredient.of(input);
      } else {
        ingredient = Ingredient.of(Item.of(input).id, Item.of(input).count);
      }
    } else {
      ingredient = Ingredient.of(input.id, input.count);
    }
    let obj = JSON.parse(ingredient.toJson());
    obj = Object.assign(obj, obj.ingredient);
    delete obj.ingredient;

    finalInputs.push(obj);
  }
  return finalInputs;
}

function maceratorBuilder(event, output, inputs) {
  output = Item.of(output);
  event.custom({
    type: "scguns:macerating",
    processingTime: 200,
    ingredients: makeJsonIngredients(inputs),
    result: {
      item: output.id,
      count: output.count,
    },
  });

  event.custom({
    type: "scguns:powered_macerating",
    processingTime: 100,
    energyUse: 1000,
    ingredients: makeJsonIngredients(inputs),
    result: {
      item: output.id,
      count: output.count,
    },
  });
}

function infusion(event, output, input, eterna, quanta, arcana) {
  output = Item.of(output);
  event.custom({
    type: "apotheosis:enchanting",
    input: makeJsonIngredients([input])[0],
    requirements: {
      eterna: eterna,
      quanta: quanta,
      arcana: arcana,
    },
    result: { item: output.id, count: output.count },
  });
}

function alloying(event, smeltOutput, procOutput, inputs) {
  maceratorBuilder(event, procOutput, inputs);
  event
    .smelting(smeltOutput, procOutput)
    .xp(2)
    .id(`kubejs:alloysmelting/${smeltOutput.split(":")[1]}`);
}
