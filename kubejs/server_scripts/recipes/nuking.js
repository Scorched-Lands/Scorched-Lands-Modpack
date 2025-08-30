// All entries in global.nukelist will be removed from recipe viewers, loot
// tables, recipes, tags, ect.

global.nukelist = [
  "apotheosis:gem_dust",
  "apotheosis:gem",
  "apotheosis:sigil_of_socketing",
  "apotheosis:sigil_of_withdrawal",
  "@mcore",
  "actuallyadditions:diamond_aiot",
  "actuallyadditions:gold_aiot",
  "actuallyadditions:iron_aiot",
  "actuallyadditions:netherite_aiot",
  "actuallyadditions:stone_aiot",
  "actuallyadditions:wooden_aiot",
  "create:cart_assembler",
  /^(?!actuallyadditions:drill_core$)actuallyadditions:drill_.+/,
  "scguns:whispers",
  "scguns:echoes_2",
  "scguns:sculk_resonator",
  "scguns:forlorn_hope",
  "scguns:deep_dark_blueprint",
];

ServerEvents.tags("item", (event) => {
  event.removeAllTagsFrom(global.nukelist);
  event.add("sl:nukelist", global.nukelist);
  event.add("c:hidden_from_recipe_viewers", global.nukelist);
});

ServerEvents.tags("block", (event) => {
  event.removeAllTagsFrom(global.nukelist);
});

ServerEvents.tags("fluid", (event) => {
  event.removeAllTagsFrom(global.nukelist);
  event.add("sl:nukelist", global.nukelist);
  event.add("c:hidden_from_recipe_viewers", global.nukelist);
});

ServerEvents.recipes((event) => {
  event.remove({ input: global.nukelist });
  event.remove({ output: global.nukelist });
});

LootJS.modifiers((event) => {
  event
    .addLootTypeModifier(
      LootType.ENTITY,
      LootType.UNKNOWN,
      LootType.BLOCK,
      LootType.CHEST,
      LootType.FISHING,
      LootType.GIFT,
      LootType.ADVANCEMENT_ENTITY,
      LootType.ADVANCEMENT_REWARD,
      LootType.PIGLIN_BARTER
    )
    .removeLoot(global.nukelist);
});
