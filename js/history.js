google.load("visualization", "1", {packages:["timeline"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
  var chart = new google.visualization.Timeline(document.getElementById('workhistory'));
  var dataTable = new google.visualization.DataTable();
  dataTable.addColumn({ type: 'string', id: 'Room' });
  dataTable.addColumn({ type: 'string', id: 'Name' });
  dataTable.addColumn({ type: 'date', id: 'Start' });
  dataTable.addColumn({ type: 'date', id: 'End' });
  dataTable.addRows([
    [ ' ',  'HiDev',    new Date(2012, 10, 1),  new Date(2012, 12, 31) ],
    [ ' ',  'Broadcom Corporation',    new Date(2013, 1, 1), new Date(2014, 1, 1) ],
    [ ' ',  'UCSD Computer Science Department', new Date(2013, 9, 1), new Date(2014, 9, 10) ],
	[ ' ',  'Microsoft Corporation', new Date(2013, 9, 1), new Date(2014, 6, 10) ],
	[ ' ',  'NASA\'s JPL', new Date(2014, 6, 1), new Date(2014, 10, 1) ],
    [ ' ', 'University of California, San Diego', new Date(2012, 9, 9), new Date(2016, 6, 30) ]]);

  var options = {
    width: 1300
  };

  chart.draw(dataTable, options);
}