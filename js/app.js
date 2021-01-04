function showLanguages() {
  document.getElementById("heading").textContent = "Top 10 Most Speaking Languages";
  google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawStuff);
function drawStuff() {
        var data = new google.visualization.arrayToDataTable([
          ['Languages', 'Percentage'],
          ["Chinese", 11.922],
        ["Spanish", 5.994],
        ["English", 4.922],
        ["Hindi", 4.429],
        ["Bengali", 2.961],
        ["Portuguese", 2.870],
        ["Russian", 2.00],
        ["Japanese", 1.662],
        ["Punjabi", 1.204],
        ["Marathi", 1.079]
        ]);

        var options = {
          title: 'Top Speaking Languages in the World',
          width: 800,
          height: 300,

          legend: { position: 'none' },
          chart: { 
            // title: 'Top Speaking Languages',
           //         subtitle: 'Percentage' 
               },
          bars: 'vertical', // Required for Material Bar Charts.
          axes: {
            x: {
              0: { side: 'top', label: ''} // Top x-axis.
            }
          },
          bar: { groupWidth: "90%" }
        };

        var chart = new google.charts.Bar(document.getElementById('top_x_div'));
        chart.draw(data, options);
      };
}


function showPopulation() {
  document.getElementById("heading").textContent = "Top 10 Most Populated Countries";
  google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawStuff);
function drawStuff() {
        var data = new google.visualization.arrayToDataTable([
          ['Languages', 'Population'],
          ["China", 1439323776],
        ["India", 1380004385],
        ["United States", 331002651],
        ["Indonesia", 273523615],
        ["Pakistan", 220892340],
        ["Brazil", 212559417],
        ["Nigeria", 206139589],
        ["Bangladesh", 164689383],
        ["Russia", 145934462],
        ["Mexico", 128932753]
        ]);

        var options = {
          title: 'Top Population Countries in the World',
          width: 800,
          height: 300,

          legend: { position: 'none' },
          chart: { 
            // title: 'Top Speaking Languages',
           //         subtitle: 'Percentage' 
               },
          bars: 'vertical', // Required for Material Bar Charts.
          axes: {
            x: {
              0: { side: 'top', label: ''} // Top x-axis.
            }
          },
          bar: { groupWidth: "90%" }
        };

        var chart = new google.charts.Bar(document.getElementById('top_x_div'));
        chart.draw(data, options);
      };
}
