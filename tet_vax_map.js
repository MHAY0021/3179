var vg_2 = "tet_vax_map.json";

vegaEmbed("#map_tetVax", vg_2).then(function(result) {

// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "tet_cases_map.json";

vegaEmbed("#map_tetCases", vg_3).then(function(result) {

// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_4 = "fluAvailabilityMap.json";

vegaEmbed("#mapFlu", vg_4).then(function(result) {

// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_5 = "intScat.json";

vegaEmbed("#intScat", vg_5).then(function(result) {

// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);