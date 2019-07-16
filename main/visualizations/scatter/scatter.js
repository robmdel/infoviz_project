console.log('CALLED SCATTER.JS')


function draw_scatterplot(){
	var width = 600;
	var height = 350;
	var margin = 50;
	var duration = 250;






// setup x
    var xValue = function(d) { return d.x;}, // data -> value
        xScale = d3.scaleLinear().range([0, width-margin]), // value -> display
        xMap = function(d) { return xScale(xValue(d));}, // data -> display
        xAxis = d3.axisBottom().scale(xScale);

        //console.log(xScale);

// setup y
    var yValue = function(d) { return d.y;}, // data -> value
        yScale = d3.scaleLinear().range([height-margin, 0]), // value -> display
        yMap = function(d) { return yScale(yValue(d));}, // data -> display
        yAxis = d3.axisLeft().scale(yScale);

// setup fill color
    var cValue = function(d) { return d.cluster;},
        //color = d3.scaleOrdinal().range(['#7fc97f','#beaed4','#fdc086', '#ffff99', '#386cb0
        color = d3.scaleOrdinal().range(['#1b9e77','#d95f02','#7570b3','#e7298a','#66a61e']);



/* Add SVG */
var svg_pca = d3.select("#scatter").append("svg")
  .attr("width", (width+margin)+"px")
  .attr("height", (height+margin)+"px")
  //.call(d3.zoom().on("zoom", function () {
	//	svg_pca.attr("transform", d3.event.transform)
	//}))
  .append('g')
  .attr("transform", `translate(${margin}, ${margin})`);


// HERE COMES THE INTERESTING PART


d3.csv('./visualizations/scatter/final_clustering.csv',function(error,data){
        //console.log(data);

        var div = d3.select("body").append("div")	
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








    	












        // don't want dots overlapping axis, so add in buffer to data domain
        //xScale.domain([ d3.min(data, xValue)-100, d3.max(data, xValue)+100]);
        //yScale.domain([d3.min(data, yValue)-100, d3.max(data, yValue) +100]);
        xScale.domain([-5, 30]);
        yScale.domain([-15, 15]);

        // x-axis
        svg_pca.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + '300' + ")")
            .call(xAxis);

        // y-axis
        svg_pca.append("g")
            .attr("class", "y axis")
            .call(yAxis);

        // draw dots
        svg_pca
		.selectAll(".dot")
            .data(data)
            .enter().append("circle")
            .attr("class", "dot")
            .attr("r", 3.5)
            .attr("cx", xMap)
            .attr("cy", yMap)
            .style("fill", function(d) { return color(cValue(d));})
            .on("mouseover", function(d) {



            	//putInEvidence(d.team, color(cValue(d)))
            	putInEvidence(d.team, '#f00')


            	d3.select(this)
            	.style('border', '3px')
            	.style('stroke', '#f00')
            	.style('fill', '#ff0')


            	div.transition()		
                .duration(10)		
                .style("opacity", .7)
                .style('width', 'max-content');

            	//div.html(d.team + "<br/>"  + d.team)	
            	div.html(d.team + ': ' + d.meds)
                .style("left", (d3.event.pageX) + "px")		
                .style("top", (d3.event.pageY - 28) + "px");



            	if(!mySet.has(d.team)){
            		showRadar(d.team, color(cValue(d)));
            	showCountry(d.team, color(cValue(d)));

                
                //if (team_in_legend_global.map(function(d){return d.properties.admin;}).indexOf(d.team)!==-1) return;

                //showCountry(d.team, color(cValue(d)));

                //team_id=country_id_by_pos.indexOf(d.team);
                //console.log("asasdsd");
                //console.log(team_id);



                d3.select("#radarWrapper"+ team_id).attr("visibility","visible").style('fill','none');;

                d3.select("#contorni"+ team_id).style("stroke",color(cValue(d))).style("fill",color(cValue(d))).style("fill-opacity",0.1)
                    .style('fill','none');
                d3.selectAll(".radarCircle"+ team_id).style("fill",color(cValue(d)));
            	}

            })
            .on("mouseout", function(d) {

            	removeEvidence(d.team)


            	d3.select(this)
            	.style('border', '0px')
            	.style('stroke', 'none')
            	.style('fill', color(cValue(d)))

            	div.transition()		
                .duration(10)		
                .style("opacity", 0);	

            	if(!mySet.has(d.team)){
            		removeRadar(d.team);

            	removeCountryFromLineChart(d.team);
            	

            	//console.log("sasdd");
            	//console.log(team_in_legend_global);
            	
                d3.select("#tooltip2").classed("hidden", true);
                
                //if (team_in_legend_global.map(function(d){return d.properties.admin;}).indexOf(d.team)!==-1) return;
                //removeCountryFromLineChart(d.team);
                //team_id=country_id_by_pos.indexOf(d.team);
                //d3.select("#radarWrapper"+ team_id).attr("visibility","hidden");
            	}
            });

        

    });

// draw legend
        
        var legend = svg_pca.selectAll(".legend")
            .data(color.domain().sort())
            .enter().append("g")
            .attr("class", "legend")
            .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

        // draw legend colored rectangles
        legend.append("rect")
            .attr("x", width - 820)
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", color);

        // draw legend text
        legend.append("text")
            .attr("x", width - 720)
            .attr("y", 9)
            .attr("dy", ".35em")
            .style("text-anchor", "end")
            .text(function(d) { return "Cluster: "+d;}) 



}


