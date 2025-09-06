ServerEvents.recipes((event) => {
  const removedTypes = [
    
  ];

  const removedIDs = [
    'scguns:macerator',
    'scguns:advanced_composter',
    'scguns:gun_bench',
    'scguns:mechanical_press',
    'minecraft:enchanting_table',
    'create:crafting/kinetics/fluid_tank',
    'scguns:pebbles_from_gravel',
    'scguns:treated_brass_ingot_from_smelting_treated_brass_blend',
    'scguns:treated_brass_ingot_from_blasting_treated_brass_blend',
    'create:mixing/brass_ingot',
    'scguns:create/ancient_brass_brass_from_mixing',
    'scguns:create/treated_brass_blend_from_mixing',
    'scguns:macerator/treated_brass_blend_from_macerating',
    'scguns:macerator/treated_brass_blend_from_brass_mask_from_macerating',
    'scguns:powered_macerator/powered_treated_brass_blend_from_brass_mask_from_macerating',
    'scguns:powered_macerator/powered_treated_brass_blend_from_macerating',
    'scguns:create/treated_brass_ingot_from_mixing'
  ];
  const removedInputs = [];
  const removedOutputs = [];

  removedTypes.forEach((type) => event.remove({ type: type }));
  removedIDs.forEach((id) => event.remove({ id: id }));
  removedInputs.forEach((input) => event.remove({ input: input }));
  removedOutputs.forEach((output) => event.remove({ output: output }));
});
