StartupEvents.postInit(event => {

  filterIDs([

  ])

  filterCategories([
    "actuallyadditions:crushing",
  ])

  // Writes a filter file from an array of item IDs
  function filterIDs(ids) {
    var json = {
      filters: ids.map(function (id) {
        return { id: id }
      })
    }
    JsonIO.write("kubejs/assets/emi/recipe/filters/ids.json", json)
    console.log("Generated EMI filter JSON (IDs) at kubejs/assets/emi/recipe/filters/ids.json")
  }

  // Writes a filter file from an array of category IDs
  function filterCategories(categories) {
    var json = {
      filters: categories.map(function (id) {
        return { id: id }
      })
    }
    JsonIO.write("kubejs/assets/emi/recipe/filters/categories.json", json)
    console.log("Generated EMI filter JSON (Categories) at kubejs/assets/emi/recipe/filters/categories.json")
  }
})
