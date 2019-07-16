console.log('CALLED LEGEND.JS')


var width = 250
var height = 400
var margin = 20

var leg_nocs = {}

/* Add SVG */
var svg_leg = d3.select("#legend").append("svg")
  .attr("width", (width)+"px")
  .attr("height", (height)+"px")
  //.call(d3.zoom().on("zoom", function () {
	//	svg_pca.attr("transform", d3.event.transform)
	//}))
  .append('g')
  .attr("transform", `translate(${margin}, ${margin})`);

  d3.select('#legend').select('g')
  .append('text')
  .style('text-align', 'center')
  .text('Legend').style('font', 'bold').style('font-size', '14px')

  //d3.select('#legend').select('g').append('div').attr('width', 120).attr('height', 120)




function addCountry(noc, color){

    //remove all rect and text
    d3.select('#legend').select('g')
    .selectAll('rect').remove()
    d3.select('#legend').select('g')
    .selectAll('text.noc').remove()

    leg_nocs[noc] = color

    //now plot all the elements in the set

    //console.log(leg_nocs)

    ctr = 0
    span1 = 20
    span2 = 20
    for(var k in leg_nocs){
        ctr ++

        d3.select('#legend').select('g')
        .append('rect')
        .attr("x", 0)
        .attr('y', 9+span1*ctr)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", leg_nocs[k]);

        d3.select('#legend').select('g')
        .append('text').classed('noc', true)
        .style('font-size', '12px')
        .attr("x", 25)
        .attr("y", 17+span2*ctr)
        .attr("dy", '.35em')
        //.style("text-anchor", "begin")
        .style('text-align', 'left')
        .text(k)
    }

    
    //.text(function(d) { return "Cluster: "+d;})
}

function hideCountry(noc){

    //console.log('remove ' + noc)

    d3.select('#legend').select('g')
    .selectAll('rect').remove()
    d3.select('#legend').select('g')
    .selectAll('text.noc').remove()

    delete leg_nocs[noc]

    console.log(leg_nocs)

    //now plot all the elements in the set

    ctr = 0
    span1 = 20
    span2 = 20
    for(var k in leg_nocs){
        ctr ++

        d3.select('#legend').select('g')
        .append('rect')
        .attr("x", 0)
        .attr('y', 9+span1*ctr)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", leg_nocs[k]);

        d3.select('#legend').select('g')
        .append('text').classed('noc', true)
        .style('font-size', '12px')
        .attr("x", 25)
        .attr("y", 17+span2*ctr)
        .attr("dy", '.35em')
        //.style("text-anchor", "begin")
        .style('text-align', 'left')
        .text(k)
    }
}




