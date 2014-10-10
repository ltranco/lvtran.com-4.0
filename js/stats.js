google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['', 'Python', 'Java', 'C#', 'C', 'Swift/Objective-C', 'C++', 'HTML/CSS', 'JavaScript', 'PHP/Perl', 'Assembly'],
    ['',  90, 85, 83, 81, 80, 60, 45, 30, 25, 22]
  ]);

  var options = {
    title: 'Programming Languages Proficiency',
      vAxis: { title: 'Relative Proficiency %', viewWindow: {
        max:100
    }},
    width: 900,
    height: 500
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('statschart'));

  chart.draw(data, options);

}


   