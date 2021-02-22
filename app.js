// var newElem = document.createElement("div");

d3.json("data.json").then(function (data) {
  // console.log(data.gaugeData);
  // console.log(data.areaData.Basics);
  // console.log(data.areaData.QualityScore[0].date);
  // console.log(data.gaugeData[0].name);
  d3.select("div#gaugeData")
    .selectAll("a")
    .data(data.gaugeData)
    // // .remove()
    // .enter()
    // .append("a")
    // .attr("href", "#")
    // .attr("onClick()", "fd")
    .each(function(d){
      this.classList.add("gd"+d.name);
    })
    // .classed(data.gaugeData[0].name,true)

    .text((dta) => dta.name + " " + dta.score + " Sample: " + dta.sample);
});

function areaDataChart(areaChart) {
  if (areaChart == "qs") {
    d3.json("data.json").then(function (data) {
      d3.select("div#areaData")
        .selectAll("p")
        .remove()
        .data(data.areaData.QualityScore)
        .enter()
        .append("p")
        .text((dta) => dta.date + dta.score);
    });
  } else if (areaChart == "b") {
    d3.json("data.json").then(function (data) {
      d3.select("div#areaData")
        .selectAll("p")
        .remove()
        .data(data.areaData.Basics)
        .enter()
        .append("p")
        .text((dta) => dta.date + dta.score);
    });
  } else if (areaChart == "i") {
    d3.json("data.json").then(function (data) {
      d3.select("div#areaData")
        .selectAll("p")
        .remove()
        .data(data.areaData.Interaction)
        .enter()
        .append("p")
        .text((dta) => dta.date + dta.score);
    });
  } else if (areaChart == "e") {
    d3.json("data.json").then(function (data) {
      d3.select("div#areaData")
        .selectAll("p")
        .remove()
        .data(data.areaData.Expertise)
        .enter()
        .append("p")
        .text((dta) => dta.date + dta.score);
    });
  } else if (areaChart == "p") {
    d3.json("data.json").then(function (data) {
      d3.select("div#areaData")
        .selectAll("p")
        .remove()
        .data(data.areaData.Process)
        .enter()
        .append("p")
        .text((dta) => dta.date + dta.score);
    });
  } else if (areaChart == "k") {
    d3.json("data.json").then(function (data) {
      d3.select("div#areaData")
        .selectAll("p")
        .remove()
        .data(data.areaData.Knowledge)
        .enter()
        .append("p")
        .text((dta) => dta.date + dta.score);
    });
  }else if (areaChart == "reset"){
    d3.select("div#areaData")
    .selectAll("p")
    .remove()
    .exit()
  }
}

