var w = 400;
var  h = 400;
var margin = 50;

var colorscale = d3.scaleOrdinal(d3.schemeCategory10);

//Legend titles
var LegendOptions = ['Smartphone','Tablet'];

var v1 = 1
var v2 = 430
var v3 = 870

//Data
var dede = [
      {
        id: "USA",
        name: "United States",
        values: [
      {axis:"Athletics",value:v1},
      {axis:"Canoeing",value:v1},
      {axis:"Cycling",value:v1},
      {axis:"Fencing",value:v1},
      {axis:"Football",value:v1},
      {axis:"Gymnastics",value:v1},
      {axis:"Hockey",value:v1},
      {axis:"Rowing",value:v1},
      {axis:"Sailing",value:v1},
      {axis:"Shooting",value:v1},
      {axis:"Swimming",value:v1},
      {axis:"Wrestling",value:v1},
      ]},
      {
        id: "ITA",
        name: "Italy",
        values: [
      {axis:"Athletics",value:v2},
      {axis:"Canoeing",value:v2},
      {axis:"Cycling",value:v2},
      {axis:"Fencing",value:v2},
      {axis:"Football",value:v2},
      {axis:"Gymnastics",value:v2},
      {axis:"Hockey",value:v2},
      {axis:"Rowing",value:v2},
      {axis:"Sailing",value:v2},
      {axis:"Shooting",value:v2},
      {axis:"Swimming",value:v2},
      {axis:"Wrestling",value:v2},
      ]}
    ];

var d = [
{
	id: "AFG",
	name: "AFG",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "AHO",
	name: "AHO",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:1},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "ALB",
	name: "ALB",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "ALG",
	name: "ALG",
	values: [
		{axis:"Athletics",value:9},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "AND",
	name: "AND",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "ANG",
	name: "ANG",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "ANT",
	name: "ANT",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "AUS",
	name: "AUS",
	values: [
		{axis:"Athletics",value:90},
		{axis:"Canoeing",value:41},
		{axis:"Cycling",value:84},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:188},
		{axis:"Rowing",value:144},
		{axis:"Sailing",value:53},
		{axis:"Shooting",value:11},
		{axis:"Swimming",value:412},
		{axis:"Wrestling",value:3},
		]},{
	id: "ARG",
	name: "ARG",
	values: [
		{axis:"Athletics",value:5},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:2},
		{axis:"Fencing",value:5},
		{axis:"Football",value:68},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:81},
		{axis:"Rowing",value:6},
		{axis:"Sailing",value:21},
		{axis:"Shooting",value:1},
		{axis:"Swimming",value:3},
		{axis:"Wrestling",value:0},
		]},{
	id: "ARM",
	name: "ARM",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:8},
		]},{
	id: "ARU",
	name: "ARU",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "ASA",
	name: "ASA",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "AUT",
	name: "AUT",
	values: [
		{axis:"Athletics",value:7},
		{axis:"Canoeing",value:21},
		{axis:"Cycling",value:3},
		{axis:"Fencing",value:13},
		{axis:"Football",value:13},
		{axis:"Gymnastics",value:3},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:9},
		{axis:"Sailing",value:12},
		{axis:"Shooting",value:8},
		{axis:"Swimming",value:17},
		{axis:"Wrestling",value:6},
		]},{
	id: "AZE",
	name: "AZE",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:2},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:3},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:23},
		]},{
	id: "BAH",
	name: "BAH",
	values: [
		{axis:"Athletics",value:36},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:4},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "BAN",
	name: "BAN",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "BAR",
	name: "BAR",
	values: [
		{axis:"Athletics",value:1},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "BDI",
	name: "BDI",
	values: [
		{axis:"Athletics",value:2},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "BEL",
	name: "BEL",
	values: [
		{axis:"Athletics",value:16},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:47},
		{axis:"Fencing",value:48},
		{axis:"Football",value:23},
		{axis:"Gymnastics",value:48},
		{axis:"Hockey",value:30},
		{axis:"Rowing",value:30},
		{axis:"Sailing",value:19},
		{axis:"Shooting",value:17},
		{axis:"Swimming",value:5},
		{axis:"Wrestling",value:4},
		]},{
	id: "BEN",
	name: "BEN",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "BER",
	name: "BER",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "BHU",
	name: "BHU",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "BIH",
	name: "BIH",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "BIZ",
	name: "BIZ",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "BLR",
	name: "BLR",
	values: [
		{axis:"Athletics",value:17},
		{axis:"Canoeing",value:22},
		{axis:"Cycling",value:1},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:4},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:17},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:7},
		{axis:"Swimming",value:3},
		{axis:"Wrestling",value:11},
		]},{
	id: "CZE",
	name: "CZE",
	values: [
		{axis:"Athletics",value:37},
		{axis:"Canoeing",value:42},
		{axis:"Cycling",value:15},
		{axis:"Fencing",value:6},
		{axis:"Football",value:33},
		{axis:"Gymnastics",value:78},
		{axis:"Hockey",value:16},
		{axis:"Rowing",value:53},
		{axis:"Sailing",value:1},
		{axis:"Shooting",value:18},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:15},
		]},{
	id: "BOL",
	name: "BOL",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "BOT",
	name: "BOT",
	values: [
		{axis:"Athletics",value:1},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "BRA",
	name: "BRA",
	values: [
		{axis:"Athletics",value:26},
		{axis:"Canoeing",value:4},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:136},
		{axis:"Gymnastics",value:4},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:34},
		{axis:"Shooting",value:8},
		{axis:"Swimming",value:20},
		{axis:"Wrestling",value:0},
		]},{
	id: "BRN",
	name: "BRN",
	values: [
		{axis:"Athletics",value:3},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "BRU",
	name: "BRU",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "BUL",
	name: "BUL",
	values: [
		{axis:"Athletics",value:19},
		{axis:"Canoeing",value:28},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:32},
		{axis:"Gymnastics",value:10},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:34},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:16},
		{axis:"Swimming",value:3},
		{axis:"Wrestling",value:69},
		]},{
	id: "BUR",
	name: "BUR",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "CAF",
	name: "CAF",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "CAM",
	name: "CAM",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "CAN",
	name: "CAN",
	values: [
		{axis:"Athletics",value:98},
		{axis:"Canoeing",value:33},
		{axis:"Cycling",value:23},
		{axis:"Fencing",value:0},
		{axis:"Football",value:49},
		{axis:"Gymnastics",value:1},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:203},
		{axis:"Sailing",value:25},
		{axis:"Shooting",value:24},
		{axis:"Swimming",value:98},
		{axis:"Wrestling",value:17},
		]},{
	id: "CAY",
	name: "CAY",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "CGO",
	name: "CGO",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "CHA",
	name: "CHA",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "CHI",
	name: "CHI",
	values: [
		{axis:"Athletics",value:2},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:17},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:1},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "CHN",
	name: "CHN",
	values: [
		{axis:"Athletics",value:27},
		{axis:"Canoeing",value:4},
		{axis:"Cycling",value:10},
		{axis:"Fencing",value:30},
		{axis:"Football",value:15},
		{axis:"Gymnastics",value:109},
		{axis:"Hockey",value:16},
		{axis:"Rowing",value:29},
		{axis:"Sailing",value:7},
		{axis:"Shooting",value:56},
		{axis:"Swimming",value:70},
		{axis:"Wrestling",value:10},
		]},{
	id: "CIV",
	name: "CIV",
	values: [
		{axis:"Athletics",value:1},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "CMR",
	name: "CMR",
	values: [
		{axis:"Athletics",value:2},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:18},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "COD",
	name: "COD",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "COK",
	name: "COK",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "COL",
	name: "COL",
	values: [
		{axis:"Athletics",value:3},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:6},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:2},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:2},
		]},{
	id: "COM",
	name: "COM",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "CPV",
	name: "CPV",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "CRC",
	name: "CRC",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:4},
		{axis:"Wrestling",value:0},
		]},{
	id: "CRO",
	name: "CRO",
	values: [
		{axis:"Athletics",value:5},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:1},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:18},
		{axis:"Sailing",value:3},
		{axis:"Shooting",value:3},
		{axis:"Swimming",value:1},
		{axis:"Wrestling",value:0},
		]},{
	id: "CRT",
	name: "CRT",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "CUB",
	name: "CUB",
	values: [
		{axis:"Athletics",value:58},
		{axis:"Canoeing",value:5},
		{axis:"Cycling",value:1},
		{axis:"Fencing",value:20},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:2},
		{axis:"Shooting",value:4},
		{axis:"Swimming",value:2},
		{axis:"Wrestling",value:22},
		]},{
	id: "CYP",
	name: "CYP",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:1},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "DEN",
	name: "DEN",
	values: [
		{axis:"Athletics",value:7},
		{axis:"Canoeing",value:22},
		{axis:"Cycling",value:52},
		{axis:"Fencing",value:6},
		{axis:"Football",value:65},
		{axis:"Gymnastics",value:111},
		{axis:"Hockey",value:12},
		{axis:"Rowing",value:79},
		{axis:"Sailing",value:66},
		{axis:"Shooting",value:27},
		{axis:"Swimming",value:21},
		{axis:"Wrestling",value:13},
		]},{
	id: "DJI",
	name: "DJI",
	values: [
		{axis:"Athletics",value:1},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "DMA",
	name: "DMA",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "DOM",
	name: "DOM",
	values: [
		{axis:"Athletics",value:3},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "ECU",
	name: "ECU",
	values: [
		{axis:"Athletics",value:2},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "EGY",
	name: "EGY",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:1},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:6},
		]},{
	id: "ERI",
	name: "ERI",
	values: [
		{axis:"Athletics",value:1},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "ESA",
	name: "ESA",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "ESP",
	name: "ESP",
	values: [
		{axis:"Athletics",value:14},
		{axis:"Canoeing",value:24},
		{axis:"Cycling",value:19},
		{axis:"Fencing",value:1},
		{axis:"Football",value:52},
		{axis:"Gymnastics",value:4},
		{axis:"Hockey",value:77},
		{axis:"Rowing",value:2},
		{axis:"Sailing",value:33},
		{axis:"Shooting",value:3},
		{axis:"Swimming",value:8},
		{axis:"Wrestling",value:1},
		]},{
	id: "EST",
	name: "EST",
	values: [
		{axis:"Athletics",value:6},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:1},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:7},
		{axis:"Sailing",value:7},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:11},
		]},{
	id: "ETH",
	name: "ETH",
	values: [
		{axis:"Athletics",value:53},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "RUS",
	name: "RUS",
	values: [
		{axis:"Athletics",value:373},
		{axis:"Canoeing",value:112},
		{axis:"Cycling",value:77},
		{axis:"Fencing",value:221},
		{axis:"Football",value:87},
		{axis:"Gymnastics",value:399},
		{axis:"Hockey",value:32},
		{axis:"Rowing",value:177},
		{axis:"Sailing",value:31},
		{axis:"Shooting",value:93},
		{axis:"Swimming",value:197},
		{axis:"Wrestling",value:192},
		]},{
	id: "FIJ",
	name: "FIJ",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "FIN",
	name: "FIN",
	values: [
		{axis:"Athletics",value:138},
		{axis:"Canoeing",value:14},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:99},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:16},
		{axis:"Sailing",value:35},
		{axis:"Shooting",value:41},
		{axis:"Swimming",value:4},
		{axis:"Wrestling",value:85},
		]},{
	id: "FRA",
	name: "FRA",
	values: [
		{axis:"Athletics",value:116},
		{axis:"Canoeing",value:53},
		{axis:"Cycling",value:151},
		{axis:"Fencing",value:310},
		{axis:"Football",value:32},
		{axis:"Gymnastics",value:58},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:119},
		{axis:"Sailing",value:117},
		{axis:"Shooting",value:69},
		{axis:"Swimming",value:80},
		{axis:"Wrestling",value:17},
		]},{
	id: "GER",
	name: "GER",
	values: [
		{axis:"Athletics",value:365},
		{axis:"Canoeing",value:229},
		{axis:"Cycling",value:155},
		{axis:"Fencing",value:122},
		{axis:"Football",value:173},
		{axis:"Gymnastics",value:164},
		{axis:"Hockey",value:248},
		{axis:"Rowing",value:471},
		{axis:"Sailing",value:69},
		{axis:"Shooting",value:58},
		{axis:"Swimming",value:367},
		{axis:"Wrestling",value:51},
		]},{
	id: "FSM",
	name: "FSM",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "GAB",
	name: "GAB",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "GAM",
	name: "GAM",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "GBR",
	name: "GBR",
	values: [
		{axis:"Athletics",value:338},
		{axis:"Canoeing",value:22},
		{axis:"Cycling",value:182},
		{axis:"Fencing",value:28},
		{axis:"Football",value:45},
		{axis:"Gymnastics",value:51},
		{axis:"Hockey",value:163},
		{axis:"Rowing",value:270},
		{axis:"Sailing",value:143},
		{axis:"Shooting",value:99},
		{axis:"Swimming",value:127},
		{axis:"Wrestling",value:17},
		]},{
	id: "GBS",
	name: "GBS",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "GEO",
	name: "GEO",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:1},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:18},
		]},{
	id: "GEQ",
	name: "GEQ",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "GHA",
	name: "GHA",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:20},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "GRE",
	name: "GRE",
	values: [
		{axis:"Athletics",value:37},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:4},
		{axis:"Fencing",value:12},
		{axis:"Football",value:11},
		{axis:"Gymnastics",value:12},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:55},
		{axis:"Sailing",value:16},
		{axis:"Shooting",value:25},
		{axis:"Swimming",value:7},
		{axis:"Wrestling",value:11},
		]},{
	id: "GRN",
	name: "GRN",
	values: [
		{axis:"Athletics",value:2},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "GUA",
	name: "GUA",
	values: [
		{axis:"Athletics",value:1},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "GUI",
	name: "GUI",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "GUM",
	name: "GUM",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "GUY",
	name: "GUY",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "HAI",
	name: "HAI",
	values: [
		{axis:"Athletics",value:1},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:5},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "HON",
	name: "HON",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "HUN",
	name: "HUN",
	values: [
		{axis:"Athletics",value:52},
		{axis:"Canoeing",value:158},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:236},
		{axis:"Football",value:79},
		{axis:"Gymnastics",value:111},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:8},
		{axis:"Sailing",value:2},
		{axis:"Shooting",value:17},
		{axis:"Swimming",value:94},
		{axis:"Wrestling",value:55},
		]},{
	id: "INA",
	name: "INA",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "IND",
	name: "IND",
	values: [
		{axis:"Athletics",value:2},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:173},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:4},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:5},
		]},{
	id: "IOA",
	name: "IOA",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:5},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "IRI",
	name: "IRI",
	values: [
		{axis:"Athletics",value:1},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:43},
		]},{
	id: "IRL",
	name: "IRL",
	values: [
		{axis:"Athletics",value:6},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:2},
		{axis:"Sailing",value:3},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:4},
		{axis:"Wrestling",value:0},
		]},{
	id: "IRQ",
	name: "IRQ",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "ISL",
	name: "ISL",
	values: [
		{axis:"Athletics",value:2},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "ISR",
	name: "ISR",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:1},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:3},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "ISV",
	name: "ISV",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:1},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "ITA",
	name: "ITA",
	values: [
		{axis:"Athletics",value:72},
		{axis:"Canoeing",value:23},
		{axis:"Cycling",value:124},
		{axis:"Fencing",value:359},
		{axis:"Football",value:48},
		{axis:"Gymnastics",value:109},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:183},
		{axis:"Sailing",value:26},
		{axis:"Shooting",value:43},
		{axis:"Swimming",value:27},
		{axis:"Wrestling",value:21},
		]},{
	id: "IVB",
	name: "IVB",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "JAM",
	name: "JAM",
	values: [
		{axis:"Athletics",value:156},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:1},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "JOR",
	name: "JOR",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "JPN",
	name: "JPN",
	values: [
		{axis:"Athletics",value:31},
		{axis:"Canoeing",value:1},
		{axis:"Cycling",value:6},
		{axis:"Fencing",value:5},
		{axis:"Football",value:34},
		{axis:"Gymnastics",value:166},
		{axis:"Hockey",value:11},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:4},
		{axis:"Shooting",value:6},
		{axis:"Swimming",value:123},
		{axis:"Wrestling",value:69},
		]},{
	id: "KAZ",
	name: "KAZ",
	values: [
		{axis:"Athletics",value:4},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:2},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:3},
		{axis:"Swimming",value:1},
		{axis:"Wrestling",value:17},
		]},{
	id: "KEN",
	name: "KEN",
	values: [
		{axis:"Athletics",value:99},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "KGZ",
	name: "KGZ",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:2},
		]},{
	id: "KIR",
	name: "KIR",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "KOR",
	name: "KOR",
	values: [
		{axis:"Athletics",value:2},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:20},
		{axis:"Football",value:18},
		{axis:"Gymnastics",value:9},
		{axis:"Hockey",value:48},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:16},
		{axis:"Swimming",value:4},
		{axis:"Wrestling",value:36},
		]},{
	id: "KOS",
	name: "KOS",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "KSA",
	name: "KSA",
	values: [
		{axis:"Athletics",value:1},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "KUW",
	name: "KUW",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:2},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "LAO",
	name: "LAO",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "LAT",
	name: "LAT",
	values: [
		{axis:"Athletics",value:5},
		{axis:"Canoeing",value:2},
		{axis:"Cycling",value:3},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:2},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:1},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:1},
		]},{
	id: "LBA",
	name: "LBA",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "LBR",
	name: "LBR",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "LCA",
	name: "LCA",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "LES",
	name: "LES",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "LIB",
	name: "LIB",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:3},
		]},{
	id: "LIE",
	name: "LIE",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "LTU",
	name: "LTU",
	values: [
		{axis:"Athletics",value:5},
		{axis:"Canoeing",value:3},
		{axis:"Cycling",value:1},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:6},
		{axis:"Sailing",value:1},
		{axis:"Shooting",value:1},
		{axis:"Swimming",value:1},
		{axis:"Wrestling",value:2},
		]},{
	id: "LUX",
	name: "LUX",
	values: [
		{axis:"Athletics",value:2},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "MAD",
	name: "MAD",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "MAL",
	name: "MAL",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:1},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "MAR",
	name: "MAR",
	values: [
		{axis:"Athletics",value:19},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "MAW",
	name: "MAW",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "MDA",
	name: "MDA",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:2},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:1},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:1},
		]},{
	id: "MDV",
	name: "MDV",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "MEX",
	name: "MEX",
	values: [
		{axis:"Athletics",value:11},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:2},
		{axis:"Fencing",value:1},
		{axis:"Football",value:16},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:1},
		{axis:"Swimming",value:2},
		{axis:"Wrestling",value:1},
		]},{
	id: "MGL",
	name: "MGL",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:2},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:9},
		]},{
	id: "MHL",
	name: "MHL",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "MKD",
	name: "MKD",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:1},
		]},{
	id: "MLI",
	name: "MLI",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "MLT",
	name: "MLT",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "MNE",
	name: "MNE",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "MON",
	name: "MON",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "MOZ",
	name: "MOZ",
	values: [
		{axis:"Athletics",value:2},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "MRI",
	name: "MRI",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "MTN",
	name: "MTN",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "MYA",
	name: "MYA",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "NAM",
	name: "NAM",
	values: [
		{axis:"Athletics",value:4},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "NCA",
	name: "NCA",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "NED",
	name: "NED",
	values: [
		{axis:"Athletics",value:22},
		{axis:"Canoeing",value:12},
		{axis:"Cycling",value:67},
		{axis:"Fencing",value:31},
		{axis:"Football",value:42},
		{axis:"Gymnastics",value:12},
		{axis:"Hockey",value:255},
		{axis:"Rowing",value:139},
		{axis:"Sailing",value:43},
		{axis:"Shooting",value:6},
		{axis:"Swimming",value:114},
		{axis:"Wrestling",value:0},
		]},{
	id: "NEP",
	name: "NEP",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "NFL",
	name: "NFL",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "NGR",
	name: "NGR",
	values: [
		{axis:"Athletics",value:41},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:50},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "NIG",
	name: "NIG",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "NOR",
	name: "NOR",
	values: [
		{axis:"Athletics",value:20},
		{axis:"Canoeing",value:22},
		{axis:"Cycling",value:4},
		{axis:"Fencing",value:1},
		{axis:"Football",value:47},
		{axis:"Gymnastics",value:121},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:61},
		{axis:"Sailing",value:125},
		{axis:"Shooting",value:77},
		{axis:"Swimming",value:2},
		{axis:"Wrestling",value:8},
		]},{
	id: "NRU",
	name: "NRU",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "NZL",
	name: "NZL",
	values: [
		{axis:"Athletics",value:24},
		{axis:"Canoeing",value:18},
		{axis:"Cycling",value:18},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:14},
		{axis:"Rowing",value:69},
		{axis:"Sailing",value:33},
		{axis:"Shooting",value:2},
		{axis:"Swimming",value:6},
		{axis:"Wrestling",value:0},
		]},{
	id: "OMA",
	name: "OMA",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "PAK",
	name: "PAK",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:119},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:1},
		]},{
	id: "PAN",
	name: "PAN",
	values: [
		{axis:"Athletics",value:3},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "PAR",
	name: "PAR",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:17},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "PER",
	name: "PER",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:3},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "PHI",
	name: "PHI",
	values: [
		{axis:"Athletics",value:2},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:2},
		{axis:"Wrestling",value:0},
		]},{
	id: "PLE",
	name: "PLE",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "PLW",
	name: "PLW",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "PNG",
	name: "PNG",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "POL",
	name: "POL",
	values: [
		{axis:"Athletics",value:72},
		{axis:"Canoeing",value:37},
		{axis:"Cycling",value:24},
		{axis:"Fencing",value:82},
		{axis:"Football",value:50},
		{axis:"Gymnastics",value:9},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:52},
		{axis:"Sailing",value:4},
		{axis:"Shooting",value:12},
		{axis:"Swimming",value:6},
		{axis:"Wrestling",value:26},
		]},{
	id: "POR",
	name: "POR",
	values: [
		{axis:"Athletics",value:10},
		{axis:"Canoeing",value:2},
		{axis:"Cycling",value:1},
		{axis:"Fencing",value:6},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:8},
		{axis:"Shooting",value:1},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "PRK",
	name: "PRK",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:3},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:3},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:10},
		]},{
	id: "PUR",
	name: "PUR",
	values: [
		{axis:"Athletics",value:1},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:1},
		]},{
	id: "QAT",
	name: "QAT",
	values: [
		{axis:"Athletics",value:3},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:1},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "ZIM",
	name: "ZIM",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:15},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:7},
		{axis:"Wrestling",value:0},
		]},{
	id: "ROT",
	name: "ROT",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "ROU",
	name: "ROU",
	values: [
		{axis:"Athletics",value:35},
		{axis:"Canoeing",value:67},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:47},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:135},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:175},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:15},
		{axis:"Swimming",value:9},
		{axis:"Wrestling",value:33},
		]},{
	id: "RSA",
	name: "RSA",
	values: [
		{axis:"Athletics",value:31},
		{axis:"Canoeing",value:1},
		{axis:"Cycling",value:16},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:8},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:5},
		{axis:"Swimming",value:27},
		{axis:"Wrestling",value:0},
		]},{
	id: "RWA",
	name: "RWA",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "SAM",
	name: "SAM",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "SRB",
	name: "SRB",
	values: [
		{axis:"Athletics",value:3},
		{axis:"Canoeing",value:9},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:73},
		{axis:"Gymnastics",value:18},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:13},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:9},
		{axis:"Swimming",value:3},
		{axis:"Wrestling",value:17},
		]},{
	id: "SEN",
	name: "SEN",
	values: [
		{axis:"Athletics",value:1},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "SEY",
	name: "SEY",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "SGP",
	name: "SGP",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:1},
		{axis:"Wrestling",value:0},
		]},{
	id: "SKN",
	name: "SKN",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "SLE",
	name: "SLE",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "SLO",
	name: "SLO",
	values: [
		{axis:"Athletics",value:4},
		{axis:"Canoeing",value:2},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:12},
		{axis:"Sailing",value:3},
		{axis:"Shooting",value:3},
		{axis:"Swimming",value:1},
		{axis:"Wrestling",value:0},
		]},{
	id: "SMR",
	name: "SMR",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "SOL",
	name: "SOL",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "SOM",
	name: "SOM",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "SRI",
	name: "SRI",
	values: [
		{axis:"Athletics",value:2},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "SSD",
	name: "SSD",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "STP",
	name: "STP",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "SUD",
	name: "SUD",
	values: [
		{axis:"Athletics",value:1},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "SUI",
	name: "SUI",
	values: [
		{axis:"Athletics",value:8},
		{axis:"Canoeing",value:4},
		{axis:"Cycling",value:26},
		{axis:"Fencing",value:23},
		{axis:"Football",value:15},
		{axis:"Gymnastics",value:84},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:75},
		{axis:"Sailing",value:12},
		{axis:"Shooting",value:53},
		{axis:"Swimming",value:1},
		{axis:"Wrestling",value:15},
		]},{
	id: "SUR",
	name: "SUR",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:2},
		{axis:"Wrestling",value:0},
		]},{
	id: "SVK",
	name: "SVK",
	values: [
		{axis:"Athletics",value:1},
		{axis:"Canoeing",value:32},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:5},
		{axis:"Swimming",value:2},
		{axis:"Wrestling",value:1},
		]},{
	id: "SWE",
	name: "SWE",
	values: [
		{axis:"Athletics",value:128},
		{axis:"Canoeing",value:57},
		{axis:"Cycling",value:48},
		{axis:"Fencing",value:26},
		{axis:"Football",value:60},
		{axis:"Gymnastics",value:103},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:10},
		{axis:"Sailing",value:113},
		{axis:"Shooting",value:126},
		{axis:"Swimming",value:70},
		{axis:"Wrestling",value:86},
		]},{
	id: "SWZ",
	name: "SWZ",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "SYR",
	name: "SYR",
	values: [
		{axis:"Athletics",value:1},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:2},
		]},{
	id: "TAN",
	name: "TAN",
	values: [
		{axis:"Athletics",value:2},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "TGA",
	name: "TGA",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "THA",
	name: "THA",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "TJK",
	name: "TJK",
	values: [
		{axis:"Athletics",value:1},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:1},
		]},{
	id: "TKM",
	name: "TKM",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "TLS",
	name: "TLS",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "TOG",
	name: "TOG",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:1},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "TPE",
	name: "TPE",
	values: [
		{axis:"Athletics",value:2},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "TTO",
	name: "TTO",
	values: [
		{axis:"Athletics",value:33},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:1},
		{axis:"Wrestling",value:0},
		]},{
	id: "TUN",
	name: "TUN",
	values: [
		{axis:"Athletics",value:5},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:1},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:3},
		{axis:"Wrestling",value:1},
		]},{
	id: "TUR",
	name: "TUR",
	values: [
		{axis:"Athletics",value:6},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:63},
		]},{
	id: "TUV",
	name: "TUV",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "UAE",
	name: "UAE",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:1},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "UGA",
	name: "UGA",
	values: [
		{axis:"Athletics",value:3},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "UKR",
	name: "UKR",
	values: [
		{axis:"Athletics",value:21},
		{axis:"Canoeing",value:12},
		{axis:"Cycling",value:6},
		{axis:"Fencing",value:12},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:23},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:12},
		{axis:"Sailing",value:11},
		{axis:"Shooting",value:8},
		{axis:"Swimming",value:7},
		{axis:"Wrestling",value:15},
		]},{
	id: "UNK",
	name: "UNK",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "URU",
	name: "URU",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:1},
		{axis:"Fencing",value:0},
		{axis:"Football",value:31},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:6},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "USA",
	name: "USA",
	values: [
		{axis:"Athletics",value:1080},
		{axis:"Canoeing",value:21},
		{axis:"Cycling",value:78},
		{axis:"Fencing",value:69},
		{axis:"Football",value:102},
		{axis:"Gymnastics",value:194},
		{axis:"Hockey",value:30},
		{axis:"Rowing",value:375},
		{axis:"Sailing",value:140},
		{axis:"Shooting",value:193},
		{axis:"Swimming",value:1078},
		{axis:"Wrestling",value:128},
		]},{
	id: "UZB",
	name: "UZB",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:1},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:10},
		]},{
	id: "VAN",
	name: "VAN",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "VEN",
	name: "VEN",
	values: [
		{axis:"Athletics",value:2},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:1},
		{axis:"Fencing",value:1},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:1},
		{axis:"Swimming",value:1},
		{axis:"Wrestling",value:0},
		]},{
	id: "VNM",
	name: "VNM",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:2},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "VIN",
	name: "VIN",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "YEM",
	name: "YEM",
	values: [
		{axis:"Athletics",value:0},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]},{
	id: "ZAM",
	name: "ZAM",
	values: [
		{axis:"Athletics",value:1},
		{axis:"Canoeing",value:0},
		{axis:"Cycling",value:0},
		{axis:"Fencing",value:0},
		{axis:"Football",value:0},
		{axis:"Gymnastics",value:0},
		{axis:"Hockey",value:0},
		{axis:"Rowing",value:0},
		{axis:"Sailing",value:0},
		{axis:"Shooting",value:0},
		{axis:"Swimming",value:0},
		{axis:"Wrestling",value:0},
		]}];

var id = "#radar"

//Options for the Radar chart, other than default
var cfg = {
	radius: 5,
  	w: 400,
  	h: 340,
  	factor: 1,
  	factorLegend: .85,
  	levels: 6,
  	maxValue: 1100,
  	radians: 2 * Math.PI,
  	opacityArea: 0.3,
  	ToRight: 10,
  	TranslateX: 0,
  	TranslateY: 0,
  	ExtraWidthX: 150,
  	ExtraWidthY: 60,
  	color: d3.scaleOrdinal(d3.schemeCategory10)
}


cfg.maxValue = Math.max(cfg.maxValue, d3.max(d, function(i){return d3.max(i.values.map(function(o){return o.value;}))}));
    //console.log(cfg.maxValue)
    var allAxis = (d[0].values.map(function(i, j){return i.axis}));
    var total = allAxis.length;
    //console.log('total: '+total)
    var radius = cfg.factor*Math.min(cfg.w/2, cfg.h/2);
    var Format = d3.format('d');
    d3.select(id).select("svg").remove();


//console.log('CALLED INITIALIZE')

      var g = d3.select(id)
        .append("svg")
        .attr("width", cfg.w+cfg.ExtraWidthX)
        .attr("height", cfg.h+cfg.ExtraWidthY)
        .attr("id", "SVGA(G)")
        .append("g")
        .attr("transform", `translate(70, 30)`);
        
        //.attr("transform", "translate(" + cfg.TranslateX + "," + cfg.TranslateY + ")");
        //;

    var tooltip;

    
    //Circular segments (don't touch)
    for(var j=0; j<cfg.levels-1; j++){
      var levelFactor = cfg.factor*radius*((j+1)/cfg.levels);
      g.selectAll(".levels")
    .data(allAxis)
       .enter()
       .append("svg:line")
       .attr("x1", function(d, i){return levelFactor*(1-cfg.factor*Math.sin(i*cfg.radians/total));})
       .attr("y1", function(d, i){return levelFactor*(1-cfg.factor*Math.cos(i*cfg.radians/total));})
       .attr("x2", function(d, i){return levelFactor*(1-cfg.factor*Math.sin((i+1)*cfg.radians/total));})
       .attr("y2", function(d, i){return levelFactor*(1-cfg.factor*Math.cos((i+1)*cfg.radians/total));})
       .attr("class", "line")
       .style("stroke", "grey")
       .style("stroke-opacity", "0.75")
       .style("stroke-width", "0.3px")
       .attr("transform", "translate(" + (cfg.w/2-levelFactor) + ", " + (cfg.h/2-levelFactor) + ")");
    }

    //Text indicating at what % each level is
    for(var j=0; j<cfg.levels; j++){
      var levelFactor = cfg.factor*radius*((j+1)/cfg.levels);
      g.selectAll(".levels")
       .data([1]) //dummy data
       .enter()
       .append("svg:text")
       .attr("x", function(d){return levelFactor*(1-cfg.factor*Math.sin(0));})
       .attr("y", function(d){return levelFactor*(1-cfg.factor*Math.cos(0));})
       .attr("class", "legend")
       .style("font-family", "sans-serif")
       .style("font-size", "10px")
       .attr("transform", "translate(" + (cfg.w/2-levelFactor + cfg.ToRight) + ", " + (cfg.h/2-levelFactor) + ")")
       .attr("fill", "#737373")
       .text(function(d){
       	if(j==0)
       		return '0'
       	if (j==1)
       		return 82
       	if (j==2)
       		return 255
       	if (j==3)
       		return 480
       	if (j==4)
       		return 765


       	return 1100
       }   );



       //cfg.h/2*(1-((j.value+20)/cfg.maxValue)*Math.pow(Math.log(cfg.maxValue)/Math.log(j.value+20), 3)*Math.sin(i*cfg.radians/total))
       //.text(Format((j+1)*cfg.maxValue/cfg.levels));



    }
    
    series = 0;

    var axis = g.selectAll(".axis")
        .data(allAxis)
        .enter()
        .append("g")
        .attr("class", "axis");

    axis.append("line")
      .attr("x1", cfg.w/2)
      .attr("y1", cfg.h/2)
      .attr("x2", function(d, i){return cfg.w/2*(1-cfg.factor*Math.sin(i*cfg.radians/total));})
      .attr("y2", function(d, i){return cfg.h/2*(1-cfg.factor*Math.cos(i*cfg.radians/total));})
      .attr("class", "line")
      .style("stroke", "grey")
      .style("stroke-width", "1px");

    axis.append("text")
      .attr("class", "legend")
      .text(function(d){return d})
      .style("font-family", "sans-serif")
      .style("font-size", "11px")
      .attr("text-anchor", "middle")
      .attr("dy", "1.5em")
      .attr("transform", function(d, i){return "translate(0, -10)"})
      .attr("x", function(d, i){return cfg.w/2*(1-cfg.factorLegend*Math.sin(i*cfg.radians/total))-60*Math.sin(i*cfg.radians/total);})
      .attr("y", function(d, i){return cfg.h/2*(1-Math.cos(i*cfg.radians/total))-20*Math.cos(i*cfg.radians/total);});


      //g.append('n')
      //.attr('class', 'nodes')
      //.append('polygons')
      //.attr('class', 'area')


function showRadar(noc, col){

    //console.log('SHOW RADAR: noc=' + noc + ', col=' + col);


    var div_rc = d3.select("body").append("div")	
    	.attr("class", "tooltip")				
    	.style("opacity", 0)
    	.style('position', 'absolute')
    	.style('text-align', 'left')
    	.style('vertical-align', 'middle')
    	.style('width', '115px')
    	.style('height', '25px')
    	.style('padding', '5px')
    	.style('font', '12px sans-serif')
    	.style('background', 'lightblue')
    	.style('border', '0px')
    	.style('border-radius', '8px')
    	.style('pointer-events', 'none')





    //AREAS -> CHANGES DRAW AREAS IN THE CHART
    d.forEach(function(y, x){

      if(y.id == noc){
      dataValues = [];
      g.selectAll(".nodes")
      .data(y.values, function(j, i){

      	if(j.value==0){
      		dataValues.push([cfg.w/2, cfg.h/2])
      	}
      	else{

        dataValues.push([
        //cfg.w/2*(1-(parseFloat(j.value)/cfg.maxValue)*cfg.factor*Math.sin(i*cfg.radians/total)), 
        //cfg.h/2*(1-(parseFloat(j.value)/cfg.maxValue)*cfg.factor*Math.cos(i*cfg.radians/total))
        

        cfg.w/2*(1-((j.value+20)/cfg.maxValue)*Math.pow(Math.log(cfg.maxValue)/Math.log(j.value+20), 3)*Math.sin(i*cfg.radians/total)),
        cfg.h/2*(1-((j.value+20)/cfg.maxValue)*Math.pow(Math.log(cfg.maxValue)/Math.log(j.value+20), 3)*Math.cos(i*cfg.radians/total))
        
        //cfg.h/2*(1-Math.sqrt((cfg.maxValue/j.value))*Math.pow(Math.log(j.value)/Math.log(cfg.maxValue), pot)*Math.sin(i*cfg.radians/total)),
        //cfg.h/2*(1-Math.sqrt((cfg.maxValue/j.value))*Math.pow(Math.log(j.value)/Math.log(cfg.maxValue), pot)*Math.cos(i*cfg.radians/total))

        ]);}
      });

      dataValues.push(dataValues[0]);
      g.selectAll(".area")
             .data([dataValues])
             .enter()
             .append("polygon").lower()
             .attr("class", "radar-chart-serie"+noc)
             .style("stroke-width", "2px")
             .style("stroke", col)
             .attr("points",function(d) {
               var str="";
               for(var pti=0;pti<d.length;pti++){
                 str=str+d[pti][0]+","+d[pti][1]+" ";
               }

               return str;
              })
             .style("fill", col)
             .style("fill-opacity", cfg.opacityArea)
             .on('mouseover', function (d){

             		putInEvidence(noc, '#f00')
             		//console.log('OVER AN AREA: noc='+noc+', col='+col)
                      z = "polygon."+d3.select(this).attr("class");
                      //console.log(d3.select(this).attr('class'))
                      g.selectAll("polygon")
                       .transition(200)
                       .style("fill-opacity", 0.1); 
                      g.selectAll(z)
                       .transition(200)
                       .style("fill-opacity", .7);
                      })
             .on('mouseout', function(){

             			removeEvidence(noc)
                      g.selectAll("polygon")
                       .transition(200)
                       .style("fill-opacity", cfg.opacityArea);
             });
      

    }
    });

    // This is used for the color (maybe)
    //series=0;

    // THIS DRAWS THE POINTS
    d.forEach(function(y, x){

      if(y.id == noc){


      g.selectAll(".nodes")
      .data(y.values).enter()
      .append("svg:circle")
      .attr("class", "radar-chart-serie"+noc)
      .attr('r', cfg.radius)
      .attr("alt", function(j){return j.value})
      .attr("cx", function(j, i){
        dataValues.push([
        //cfg.w/2*(1-(parseFloat(j.value)/cfg.maxValue)*cfg.factor*Math.sin(i*cfg.radians/total)), 
        //cfg.h/2*(1-(parseFloat(j.value)/cfg.maxValue)*cfg.factor*Math.cos(i*cfg.radians/total))
        
        cfg.w/2*(1-((j.value+20)/cfg.maxValue)*Math.pow(Math.log(cfg.maxValue)/Math.log(j.value+20), 3)*Math.sin(i*cfg.radians/total)),
        cfg.h/2*(1-((j.value+20)/cfg.maxValue)*Math.pow(Math.log(cfg.maxValue)/Math.log(j.value+20), 3)*Math.cos(i*cfg.radians/total))
      
        //cfg.h/2*(1-Math.sqrt((cfg.maxValue/j.value))*Math.pow(Math.log(j.value)/Math.log(cfg.maxValue), pot)*Math.sin(i*cfg.radians/total)),
        //cfg.h/2*(1-Math.sqrt((cfg.maxValue/j.value))*Math.pow(Math.log(j.value)/Math.log(cfg.maxValue), pot)*Math.cos(i*cfg.radians/total))

      ]);
        t1 = cfg.w/2*(1-((j.value+20)/cfg.maxValue)*Math.pow(Math.log(cfg.maxValue)/Math.log(j.value+20), 3)*Math.sin(i*cfg.radians/total));
      //t1 = cfg.w/2*(1-(j.value/cfg.maxValue)*  (Math.log(1100)/Math.log(j.value))/(j.value/1100)  *Math.sin(i*cfg.radians/total));
      //console.log('t1: ' + t1 + ', ' + j.value + ', factor: ')
      //(Math.log(1100)/(Math.log(j.value)*(j.value/1100)))

      //CURRENT FORMULA FOR POINTS POSITIONING
      //cfg.h/2*(1-Math.log(j.value)/Math.log(cfg.maxValue)*Math.cos(i*cfg.radians/total));

      if(j.value == 0)
        return cfg.w/2;

      //console.log('j.value=' + j.value + ', x=' + t1 + 'px, index=' + i)

      return t1;
      })
      .attr("cy", function(j, i){
        t2 = cfg.h/2*(1-((j.value+20)/cfg.maxValue)*Math.pow(Math.log(cfg.maxValue)/Math.log(j.value+20), 3)*Math.cos(i*cfg.radians/total));
        //t2 = cfg.h/2*(1-(j.value/cfg.maxValue)*(Math.log(1100)/Math.log(j.value))/(j.value/1100)*Math.cos(i*cfg.radians/total));
        //console.log('t2: ' + t2 + ', ' + j.value + ', factor: ')

        if(j.value == 0)
          return cfg.h/2;
        
        //console.log('j.value=' + j.value + ', y=' + t1 + 'px')

        return t2;
      })
      .attr("data-id", function(j){return j.axis})
      .style("fill", col).style("fill-opacity", .9)
      .on('mouseover', function (d){

      		//console.log('OVER A POINT')
      		//console.log(d)

      		putInEvidence(noc, '#f00')

            newX =  parseFloat(d3.select(this).attr('cx')) - 10;
            newY =  parseFloat(d3.select(this).attr('cy')) - 50;




            //div_rc.transition()		
            //    .duration(100)		
            //    .style("opacity", .7);
//
            //	//div.html(d.team + "<br/>"  + d.team)	
            //	div_rc.html(d.value + ': ')
            //    .style("left", (d3.event.pageX) + "px")		
            //    .style("top", (d3.event.pageY) + "px");





            
            //tooltip
            //  .attr('x', newX)
            //  .attr('y', newY)
            //  .text(Format(d.value))
            //  .transition(200)
            //  .style('opacity', 1);
              
            z = "polygon."+d3.select(this).attr("class");

            //console.log(d3.select(this).attr('class'))

            g.selectAll("polygon")
              .transition(200)
              .style("fill-opacity", 0.1); 
            g.selectAll(z)
              .transition(200)
              .style("fill-opacity", .7);
            })
      .on('mouseout', function(){

      		removeEvidence(noc)

            tooltip
              .transition(200)
              .style('opacity', 0);
            g.selectAll("polygon")
              .transition(200)
              .style("fill-opacity", cfg.opacityArea);
            })
      .append("svg:title")
      .text(function(j){return Math.max(j.value, 0)});

      series++;

    }

    });

  }

    //Tooltip (it sets the config for the mouseover text)
    tooltip = g.append('text')
           .style('opacity', 0)
           .style('font-family', 'sans-serif')
           .style('font-size', '13px');
    

function removeRadar(noc){
	//console.log('REMOVE PATH AND CIRCLES')
	g.selectAll(".radar-chart-serie"+noc)
	.attr('opacity', 0)
	.remove()

}
