function replaceitem(event, toBeReplaced, replacingItem) {
  event.replaceInput({ input: toBeReplaced }, toBeReplaced, replacingItem);
}

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

function bullet_production(
  event,
  round,
  casing,
  propellant,
  bullet,
  incompleteRound
) {
  event.custom({
    type: "scguns:mechanical_pressing",
    processingTime: 20,
    ingredients: [{ item: casing }, { item: propellant }, { item: bullet }],
    result: { item: round, count: 1 },
  });
  event.custom({
    type: "scguns:powered_mechanical_pressing",
    processingTime: 10,
    energyUse: 500,
    ingredients: [{ item: casing }, { item: propellant }, { item: bullet }],
    result: { item: round, count: 1 },
  });
  event.recipes.create
    .sequenced_assembly([round], casing, [
      event.recipes.createDeploying(incompleteRound, [
        incompleteRound,
        propellant,
      ]),
      event.recipes.createDeploying(incompleteRound, [incompleteRound, bullet]),
      event.recipes.createPressing(incompleteRound, incompleteRound),
    ])
    .transitionalItem(incompleteRound)
    .loops(1);
  event.remove({ output: round });
}

function stackShaped(result, pattern, key) {
    for (let i in key) {
        let stack = Item.of(key[i])
        key[i] = {
            item: stack.id.toString(),
            count: stack.count
        }
    }
    result = Item.of(result)
    let recipe = {
        type: "stackcrafting:stack_crafting",
        category: "misc",
        key: key,
        pattern: pattern,
        result: {
            item: result.id,
            count: result.count
        }
    }
}

// function amadron(event, input, output) {
//   input = makeJsonIngredients(input)
//   output = makeJsonIngredients(output)
//   event.custom({
//     type: "pneumaticcraft:amadron",
//     id: `scorched_lands:amadron/${output.id}`,
//     input: [
//       {
//         type: "ITEM",
//         amount: input.count,
//         id: input.id,
//       },
//     ],
//     output: [
//       {
//         type: "ITEM",
//         amount: output.count,
//         id: output.id,
//       },
//     ],
//     static: false,
//   });
// }

// function fermenting(event, fluid, inputs, output) {
//   event.custom({

//   })
// }