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
        max: 100
    }},
    width: 900,
    height: 500
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('statschart'));
  chart.draw(data, options);

  var data2 = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['iOS(Swift)',     11],
          ['iOS(Objective-C)', 8],
          ['Android', 2]
        ]);
  var options2 = {
    title: 'Mobile',
    pieHole: 0.2,
    width: 600,
    height: 300,
    pieSliceText: 'none',
    colors: ['#18D8FF', '#0A89E8', '#0CFFA1']
  };
  var chart2 = new google.visualization.PieChart(document.getElementById('mobile'));
  chart2.draw(data2, options2);

  var data3 = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['PHP',     6],
          ['HTML', 6],
          ['CSS', 4],
          ['JavaScript', 2],
          ['jQuery', 2],
          ['Wordpress', 5]
        ]);
  var options3 = {
    title: 'Web',
    pieHole: 0.2,
    width: 600,
    height: 300,
    pieSliceText: 'none',
    colors: ['#FF7000', '#14CC7C', '#CC9214', '#997C3D', '#40FFE2', '#FFE200']
  };
  var chart3 = new google.visualization.PieChart(document.getElementById('web'));
  chart3.draw(data3, options3);

  var data4 = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Financial Statements', 6],
          ['Business Plan', 4],
          ['Stock Analysis', 2]
        ]);
  var options4 = {
    title: 'Business',
    pieHole: 0.2,
    width: 600,
    height: 300,
    pieSliceText: 'none',
    colors: ['#FF1700', '#E8400C', '#FF690D', '#997C3D', '#40FFE2', '#FFE200']
  };
  var chart4 = new google.visualization.PieChart(document.getElementById('business'));
  chart4.draw(data4, options4);

  var data5 = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Vietnamese Fluency', 6],
          ['Stick Shift Driving', 4],
          ['Coffee Making', 2]
        ]);
  var options5 = {
    title: 'Random',
    pieHole: 0.2,
    width: 600,
    height: 300,
    pieSliceText: 'none',
    colors: ['#02FF00', '#FE40FF', '#3D9971', '#997C3D', '#40FFE2', '#FFE200']
  };
  var chart5 = new google.visualization.PieChart(document.getElementById('misc'));
  chart5.draw(data5, options5);
}


   