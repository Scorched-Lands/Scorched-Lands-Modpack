ServerEvents.recipes(event => {
  event.recipes.mbd2.impact_node_drilling()
    .perTick(t => {
      t.inputFluids(Fluid.of('pneumaticcraft:lubricant', 10))
      t.inputFE(85)
    })
    .inputPNCPressure(8.0)
    .duration(20 * 60)
    .blocksInStructure(1, 1, `mbd2:copper_node`)
    .outputItems(`kubejs:copper_clump`)
    .id(`kjs:mbd2/impact_node_drilling/copper_node`);

  event.recipes.mbd2.impact_node_drilling()
    .perTick(t => {
      t.inputFluids(Fluid.of('pneumaticcraft:lubricant', 10))
      t.inputFE(100)
    })
    .inputPNCPressure(9.0)
    .duration(25 * 60)
    .blocksInStructure(1, 1, `mbd2:zinc_node`)
    .outputItems(`kubejs:zinc_clump`)
    .id(`kjs:mbd2/impact_node_drilling/zinc_node`);

  event.recipes.mbd2.impact_node_drilling()
    .perTick(t => {
      t.inputFluids(Fluid.of('pneumaticcraft:lubricant', 10))
      t.inputFE(150)
    })
    .inputPNCPressure(10.0)
    .duration(35 * 60)
    .blocksInStructure(1, 1, `mbd2:gold_node`)
    .outputItems(`kubejs:gold_clump`)
    .id(`kjs:mbd2/impact_node_drilling/gold_node`);
});
