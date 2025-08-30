ServerEvents.recipes((event) => {

  // Helper functions

  let swap = (item1, item2) => {
    event.shapeless(item1, [item2]);
    event.shapeless(item2, [item1]);
  };

  let replaceitem = (toBeReplaced, replacingItem) => {
    event.replaceInput({ input: toBeReplaced }, toBeReplaced, replacingItem);
    global.nukelist.push(toBeReplaced);
  };

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

  function maceratorBuilder(output, inputs) {
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

  function alloying(smeltOutput, procOutput, inputs) {
    maceratorBuilder(procOutput, inputs);
    event
      .smelting(smeltOutput, procOutput)
      .xp(2)
      .id(`kubejs:alloysmelting/${smeltOutput.split(":")[1]}`);
  }

});
