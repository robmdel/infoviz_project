console.log('CALLED MAP.JS')

window.mySet = new Set();

var width1 = 600;
var height1 = 325;
var margin1 = 50;

// The svg
var svg1 = d3.select("#choro").append('svg')
.attr('width', (width1+margin1)+"px")
.attr('height', (height1+margin1)+"px")
.call(d3.zoom().on("zoom", function () {
    svg1.attr("transform", d3.event.transform)
  }))
.append('g')
//.append('g')
//.attr("transform", `translate(${margin}, ${margin})`);

// Map and projection
var path = d3.geoPath();
var projection = d3.geoMercator()
  .scale(90)
  .center([0,20])
  .translate([(width1+margin1)/2, 250])
  //.translate([width / 2, height / 2])


// Define the div for the tooltip
var div = d3.select("body").append("div") 
    .attr("class", "tooltip")       
    .style("opacity", 0);



// Data and color scale
//NOTE: in the array put some values of medals won s.t. it divides countries equally
var data = d3.map();
var colorScale = d3.scaleThreshold()
  .domain([1, 10, 100, 500, 1000, 3000])
  .range(d3.schemeBlues[7]);


var color_scale_legend = d3.scaleOrdinal(d3.schemeCategory10);
var legend_index = 0
var last_added = {}
var interm_removed = false
var jumped = 0
var supp = 0


// Load external data and boot
d3.queue()
  .defer(d3.json, "./geo_utils/world.geojson")
  .defer(d3.csv, "./geo_utils/med_amount.csv", function(d) { data.set(d.code, +d.medals); })
  .await(ready);


var div_mp = d3.select("body").append("div") 
      .attr("class", "tooltip")       
      .style("opacity", 0)
      .style('position', 'absolute')
      .style('text-align', 'left')
      .style('vertical-align', 'middle')
      .style('width', '70px')
      .style('height', '10px')
      .style('padding', '5px')
      .style('font', '12px sans-serif')
      .style('background', 'lightblue')
      .style('border', '0px')
      .style('border-radius', '8px')
      .style('pointer-events', 'none')


function putInEvidence(country, clr){
  svg1.selectAll("path")
  .each(function(d){
    if(d.id==country){
      d3.select(this)
      .attr('fill', clr)
      .attr('opacity', 0.6)
    }
  })
}
function removeEvidence(country){
  svg1.selectAll("path")
  .each(function(d){
    if(d.id==country){
      d3.select(this)
      .attr('fill', function (d) {
        d.total = data.get(d.id) || 0;
        return colorScale(d.total);
      })
      .attr('opacity', 1)
      
    }
  })
}

//alternate rect and colors

leg_div = d3.select('#choro')
.append('div').lower().append('g')
.style('background', '#fff')
.style('opacity', 1)

leg_svg = leg_div.append('svg').attr('width', 650+"px").attr('height', 20+"px")

//leg_svg.append('text').text('Legend: ').attr('x', 15).attr('y', 15)

sq_span = 90
tx_span = 90
left_m = 40

leg_svg.append('rect')
.attr('width', 12)
.attr('height', 12)
.attr('x', left_m)
.attr('y', 7)
.style('padding', '3px')
.style('fill', '#084594')
.style('padding', '2px')
leg_svg.append('text').text('>3000').attr('x', left_m+15).attr('y', 18).style('font-size', '13px')

leg_svg.append('rect')
.attr('width', 12)
.attr('height', 12)
.attr('x', left_m+sq_span)
.attr('y', 7)
.style('padding', '3px')
.style('fill', '#2171b5')
.style('padding', '2px')
leg_svg.append('text').text('1k-3k').attr('x', left_m+15+tx_span).attr('y', 18).style('font-size', '13px')

leg_svg.append('rect')
.attr('width', 12)
.attr('height', 12)
.attr('x', left_m+2*sq_span)
.attr('y', 7)
.style('padding', '3px')
.style('fill', '#4292c6')
.style('padding', '2px')
leg_svg.append('text').text('500-1k').attr('x', left_m+15+2*tx_span).attr('y', 18).style('font-size', '13px')

leg_svg.append('rect')
.attr('width', 12)
.attr('height', 12)
.attr('x', left_m+3*sq_span)
.attr('y', 7)
.style('padding', '3px')
.style('fill', '#6baed6')
.style('padding', '2px')
leg_svg.append('text').text('100-500').attr('x', left_m+15+3*tx_span).attr('y', 18).style('font-size', '13px')

leg_svg.append('rect')
.attr('width', 12)
.attr('height', 12)
.attr('x', left_m+4*sq_span)
.attr('y', 7)
.style('padding', '3px')
.style('fill', '#9ecae1')
.style('padding', '2px')
leg_svg.append('text').text('10-100').attr('x', left_m+15+4*tx_span).attr('y', 18).style('font-size', '13px')

leg_svg.append('rect')
.attr('width', 12)
.attr('height', 12)
.attr('x', left_m+5*sq_span)
.attr('y', 7)
.style('padding', '3px')
.style('fill', '#c6dbef')
.style('padding', '2px')
leg_svg.append('text').text('1-10').attr('x', left_m+15+5*tx_span).attr('y', 18).style('font-size', '13px')

leg_svg.append('rect')
.attr('width', 12)
.attr('height', 12)
.attr('x', left_m+6*sq_span)
.attr('y', 7)
.style('padding', '3px')
.style('fill', '#eff3ff')
.style('padding', '2px')
leg_svg.append('text').text('0').attr('x', left_m+15+6*tx_span).attr('y', 18).style('font-size', '13px')


function ready(error, topo) {


  // Draw the map
  svg1.append("g")
    .selectAll("path")
    .data(topo.features)
    .enter()
    .append("path")
      // draw each country
      .attr("d", d3.geoPath()
        .projection(projection)
      )
      .style("stroke", "#fff")
      .on("click", function(d, i){
          //temp = d.id;
          //console.log(d.total) //prints population
          temp = topo.features[i].id
          //console.log('temp:' + temp);
          //console.log('features: ' + topo.features[i].id)
          //console.log('name: ' + d.properties['name'])
          if (!mySet.has(temp)){
            if(mySet.size<10){
            //console.log('SHOW ELEMENT');
            mySet.add(temp);

            //decide next color to be used
            //if I removed an intermediate country: use the missing color and then update the next to the very last
            
            
            if(interm_removed){
            	//skip colors until the very last used
            	supp = legend_index
            	legend_index = jumped

            }
            else{
            	//increment normally
            	legend_index = legend_index+1
            	last_added[temp] = legend_index-1
            	//console.log(temp + ': ' + last_added[temp])
            }       

            addCountry(d.properties.name, color_scale_legend(legend_index));
            showCountry(temp, color_scale_legend(legend_index));
            showRadar(temp, color_scale_legend(legend_index));

            if(interm_removed){
            	interm_removed = false
            	legend_index = supp
            }

          }

          }

          else {
            //console.log("HIDE ELEMENT");
            mySet.delete(temp);
            removeCountryFromLineChart(temp);
            removeRadar(temp)
            hideCountry(d.properties.name)

            if(last_added[temp] === legend_index-1){
            	//console.log('ultimo')
            	legend_index = legend_index-1
            }
            else{
            	//console.log('intermedio, indice:' + last_added[temp])
            	interm_removed = true
            	jumped = last_added[temp]+1
            }
            //legend_index = (legend_index-1)%10
            
          }
      })
      .on('mouseover', function(d, i){

        putInEvidence(d.id, '#f00')

        d3.select(this)
        .on('mousemove', function(d, i){
          //div.transition()    
          //      .duration(10)    
          //      .style("opacity", 1)
          //      .style('position', 'absolute')
          //      .style('text-align', 'center')
          //      .style('width', '80px')
          //      .style('height', '24px')
          //      .style('padding', '2px')
          //      .style('color', '#FFF')
          //      .style('-webkit-text-stroke-width', '0.4px')
          //      .style('-webkit-text-stroke-color', '#000')
          //      .style('font', '14 px sans-serif')
          //      //.style('background', 'lightsteelblue')
          //      .style('border', '0px')
          //      .style('border-radius', '8px')
          //      .style('pointer-events', 'none');
//
          //  div .html(d.properties.name)  
          //      .style("left", (d3.event.pageX) + "px")   
          //      .style("top", (d3.event.pageY) + "px");

          nm = d.properties.name
          nm_len = nm.length

          //console.log(nm_len)

          div_mp.transition()    
                .duration(10)    
                .style("opacity", .9)
                //.style('display', 'inline')
                //.style('height', (nm_len/8*12)+'px')
                .style('width', 'max-content')

              //div.html(d.team + "<br/>"  + d.team)  
              div_mp.html(d.properties.name+': '+d.med)
                .style("left", (d3.event.pageX) + "px")   
                .style("top", (d3.event.pageY - 28) + "px");

        })
        //console.log(d)       
      })
      .on('mouseout', function(d, i){
        //console.log('ASCI DA STO BARE!1!!')

        div_mp.transition()    
                .duration(10)    
                .style("opacity", 0);


        removeEvidence(d.id)
        div.style('opacity', 0);
      })
      // set the color of each country
      .attr("fill", function (d) {
        d.total = data.get(d.id) || 0;
        return colorScale(d.total);
      })
      ;
    }