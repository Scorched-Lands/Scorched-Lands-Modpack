ServerEvents.recipes(event => {
  let flowers = Ingredient.of('#minecraft:flowers').itemIds;

  const blacklist = [
    "minecraft:wither_rose",
    "minecraft:torchflower",
    "minecraft:pitcher_plant"
  ];

  flowers = flowers.filter(flower => !blacklist.includes(flower));

  flowers.forEach(flower => {
    event.custom({
      type: "brewinandchewin:fermenting",
      basefluid: {
        count: 1000,
        fluid: "minecraft:water"
      },
      experience: 1.0,
      fermentingtime: 9600,
      ingredients: [
        { item: "minecraft:coarse_dirt" },
        { item: "minecraft:bone_meal" },
        { item: "farmersdelight:rich_soil" },
        { item: flower }
      ],
      recipe_book_tab: "meals",
      result: {
        count: 8,
        item: flower
      },
      temperature: 4
    });
  });
});
