ServerEvents.recipes((event) => {
  const apothRemovedIDs = (filters) =>
    filters.forEach((f) =>
      event.shapeless(Item.of("minecraft:barrier"), ["minecraft:barrier"]).id(f)
    );
  apothRemovedIDs([
    'apotheosis:hellshelf',
    'apotheosis:blazing_hellshelf',
    'apotheosis:glowing_hellshelf',
    'apotheosis:seashelf',
    'apotheosis:crystal_seashelf',
    'apotheosis:heart_seashelf',
    'apotheosis:dormant_deepshelf',
    'apotheosis:echoing_deepshelf',
    'apotheosis:soul_touched_deepshelf',
    'apotheosis:echoing_sculkshelf',
    'apotheosis:soul_touched_sculkshelf',
    'apotheosis:endshelf',
    'apotheosis:pearl_endshelf',
    'apotheosis:draconic_endshelf',
    'apotheosis:rectifier',
    'apotheosis:rectifier_t2',
    'apotheosis:rectifier_t3',
    'apotheosis:sightshelf',
    'apotheosis:sightshelf_t2',
    'apotheosis:filtering_shelf',
    'apotheosis:treasure_shelf',
    'apotheosis:library',
  ]);
  // replaceitem(event, 'create:brass_ingot', 'scguns:treated_brass_ingot')
});