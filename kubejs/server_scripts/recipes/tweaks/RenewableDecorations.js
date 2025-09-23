ServerEvents.recipes(event => {
  event.custom({
    type: "create:compacting",
    heat_requirement: "heated",
    ingredients: [
      { item: "minecraft:flint" },
      { item: "minecraft:flint" },
      { item: "minecraft:diorite" },
      { amount: 100, fluid: "minecraft:milk" }
    ],
    results: [
      { item: "minecraft:calcite", count: 2 }
    ]
  });

  event.custom({
    type: "create:compacting",
    ingredients: [
      { item: "minecraft:flint" },
      { item: "minecraft:flint" },
      { item: "architects_palette:flint_block" },
      { amount: 100, fluid: "minecraft:lava" }
    ],
    results: [
      { item: "minecraft:deepslate" }
    ]
  });

  event.custom({
    type: "create:compacting",
    ingredients: [
      { item: "minecraft:clay_ball" },
      { item: "minecraft:clay_ball" },
      { item: "create:limestone" },
      { amount: 100, fluid: "minecraft:lava" }
    ],
    results: [
      { item: "minecraft:dripstone_block" }
    ]
  });

   event.custom({
    type: "create:compacting",
    ingredients: [
      { item: "minecraft:clay_ball" },
      { item: "minecraft:clay_ball" },
      { item: "minecraft:red_sand" },
      { amount: 100, fluid: "minecraft:lava" }
    ],
    results: [
      { item: "quark:jasper" }
    ]
  });

   event.custom({
    type: "create:compacting",
    ingredients: [
      { item: "environmental:mud_ball" },
      { item: "environmental:mud_ball" },
      { item: "minecraft:sand" },
      { amount: 100, fluid: "minecraft:lava" }
    ],
    results: [
      { item: "quark:shale" }
    ]
  });
    event.custom({
    type: "create:compacting",
    ingredients: [
      { item: "minecraft:end_stone" },
      { item: "minecraft:chorus_fruit" },
      { amount: 100, fluid: "minecraft:lava" }
    ],
    results: [
      { item: "quark:myalite" }
    ]
  });

  event.custom({
    type: "create:compacting",
    ingredients: [
      { item: "minecraft:end_stone" },
      { item: "minecraft:cobblestone" },
      { amount: 1000, fluid: "create_central_kitchen:dragon_breath" }
    ],
    results: [
      { item: "minecraft:end_stone", count: 2 },
      { amount: 1000, fluid: "create_central_kitchen:dragon_breath" }
    ]
  });

  event.custom({
    type: "create:compacting",
    ingredients: [
      { item: "minecraft:flint" },
      { item: "minecraft:flint" },
      { item: "minecraft:clay" },
      { amount: 100, fluid: "minecraft:lava" }
    ],
    results: [
      { item: "minecraft:tuff" }
    ]
  });

   event.custom({
    type: "create:compacting",
    ingredients: [
      { item: "minecraft:bone_meal" },
      { item: "minecraft:bone_meal" },
      { item: "create:limestone" },
      { amount: 100, fluid: "minecraft:lava" }
    ],
    results: [
      { item: "atmospheric:ivory_travertine" }
    ]
  });

  event.custom({
    type: "create:compacting",
    ingredients: [
      { item: "minecraft:pink_dye" },
      { item: "atmospheric:ivory_travertine" },
      { amount: 100, fluid: "minecraft:lava" }
    ],
    results: [
      { item: "atmospheric:peach_travertine" }
    ]
  });

  event.custom({
    type: "create:compacting",
    ingredients: [
      { item: "minecraft:orange_dye" },
      { item: "atmospheric:ivory_travertine" },
      { amount: 100, fluid: "minecraft:lava" }
    ],
    results: [
      { item: "atmospheric:persimmon_travertine" }
    ]
  });

  event.custom({
    type: "create:compacting",
    ingredients: [
      { item: "minecraft:red_dye" },
      { item: "atmospheric:ivory_travertine" },
      { amount: 100, fluid: "minecraft:lava" }
    ],
    results: [
      { item: "atmospheric:saffron_travertine" }
    ]
  });
});
