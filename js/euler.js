google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Performace', 'Number of Solutions'],
    ['Under 10ms', 20],
    ['10ms - 100ms', 2],
    ['100ms - 1s', 2]
  ]);
  var options = {
    title: 'Performace of My Solutions',
    pieHole: 0.3,
    slices: {
      0: {color: '#3399FF'},
      1: {color: '#FF584C'},
      2: {color: '#B9CC14'}
    },
    pieSliceTextStyle:  {color: "black", fontName: "Lora", fontSize: 15},
    width: 500,
    height: 300
  };
  var chart = new google.visualization.PieChart(document.getElementById('eulerchart'));
  chart.draw(data, options);
}