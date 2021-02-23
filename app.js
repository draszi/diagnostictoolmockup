// var newElem = document.createElement("div");

d3.json("data.json").then(function (data) {
  // console.log(data.gaugeData);
  // console.log(data.areaData.Basics);
  // console.log(data.areaData.QualityScore[0].date);
  // console.log(data.gaugeData[0].name);
  d3.select("div#gaugeData")
    .selectAll("a")
    .data(data.gaugeData)
    // // .remove().enter()
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
    //
    d3.json("/data/data.json").then(function(data){
  
      const xScale = 
      d3.scaleBand()
      .domain(data.areaData.QualityScore.map((dataPoint)=>dataPoint.date))
      .rangeRound([0,500])
      .padding(0.1);
    
      const yScale = 
      d3.scaleLinear()
      .domain([0,100])
      .range([300,0]);
      
      d3.select("svg#areaData")
      .selectAll('.bar')
      .remove().enter()
      .data(data.areaData.QualityScore)
      .enter()
      .append('rect')
      .classed('bar', true)
      .attr('width',xScale.bandwidth())
      .attr('height', (data)=>300-yScale(data.score))
      .attr('x', data=>xScale(data.date))
      .attr('y', data=>yScale(data.score));
    })
  } 

  else if (areaChart == "b") {
    d3.json("/data/data.json").then(function(data){
  
      const xScale = 
      d3.scaleBand()
      .domain(data.areaData.Basics.map((dataPoint)=>dataPoint.date))
      .rangeRound([0,500])
      .padding(0.1);
    
      const yScale = 
      d3.scaleLinear()
      .domain([0,100])
      .range([300,0]);
      
      d3.select("svg#areaData")
      .selectAll('.bar')
      .remove().enter()
      .data(data.areaData.Basics)
      .enter()
      .append('rect')
      .classed('bar', true)
      .attr('width',xScale.bandwidth())
      .attr('height', (data)=>300-yScale(data.score))
      .attr('x', data=>xScale(data.date))
      .attr('y', data=>yScale(data.score));
    })
  } 
  
  else if (areaChart == "i") {
    d3.json("/data/data.json").then(function(data){
  
      const xScale = 
      d3.scaleBand()
      .domain(data.areaData.Interaction.map((dataPoint)=>dataPoint.date))
      .rangeRound([0,500])
      .padding(0.1);
    
      const yScale = 
      d3.scaleLinear()
      .domain([0,100])
      .range([300,0]);
      
      d3.select("svg#areaData")
      .selectAll('.bar')
      .remove().enter()
      .data(data.areaData.Interaction)
      .enter()
      .append('rect')
      .classed('bar', true)
      .attr('width',xScale.bandwidth())
      .attr('height', (data)=>300-yScale(data.score))
      .attr('x', data=>xScale(data.date))
      .attr('y', data=>yScale(data.score));
    })
  } 
  
  else if (areaChart == "e") {
    d3.json("/data/data.json").then(function(data){
  
      const xScale = 
      d3.scaleBand()
      .domain(data.areaData.Expertise.map((dataPoint)=>dataPoint.date))
      .rangeRound([0,500])
      .padding(0.1);
    
      const yScale = 
      d3.scaleLinear()
      .domain([0,100])
      .range([300,0]);
      
      d3.select("svg#areaData")
      .selectAll('.bar')
      .remove().enter()
      .data(data.areaData.Expertise)
      .enter()
      .append('rect')
      .classed('bar', true)
      .attr('width',xScale.bandwidth())
      .attr('height', (data)=>300-yScale(data.score))
      .attr('x', data=>xScale(data.date))
      .attr('y', data=>yScale(data.score));
    })
  } 
  
  else if (areaChart == "p") {
    d3.json("/data/data.json").then(function(data){
  
      const xScale = 
      d3.scaleBand()
      .domain(data.areaData.Process.map((dataPoint)=>dataPoint.date))
      .rangeRound([0,500])
      .padding(0.1);
    
      const yScale = 
      d3.scaleLinear()
      .domain([0,100])
      .range([300,0]);
      
      d3.select("svg#areaData")
      .selectAll('.bar')
      .remove().enter()
      .data(data.areaData.Process)
      .enter()
      .append('rect')
      .classed('bar', true)
      .attr('width',xScale.bandwidth())
      .attr('height', (data)=>300-yScale(data.score))
      .attr('x', data=>xScale(data.date))
      .attr('y', data=>yScale(data.score));
    })
  } 
  
  else if (areaChart == "k") {
    d3.json("/data/data.json").then(function(data){
      
      const xScale = 
      d3.scaleBand()
      .domain(data.areaData.Knowledge.map((dataPoint)=>dataPoint.date))
      .rangeRound([0,500])
      .padding(0.1);
    
      const yScale = 
      d3.scaleLinear()
      .domain([0,100])
      .range([300,0]);
      
      d3.select("svg#areaData")
      .selectAll('.bar')
      .remove().enter()
      .data(data.areaData.Knowledge)
      .enter()
      .append('rect')
      .classed('bar', true)
      .attr('width',xScale.bandwidth())
      .attr('height', (data)=>300-yScale(data.score))
      .attr('x', data=>xScale(data.date))
      .attr('y', data=>yScale(data.score));
    })
  }
  
  else if (areaChart == "reset"){
    d3.select("div#areaData")
    .selectAll("p")
    .remove().enter()
    .exit()
  }
}


