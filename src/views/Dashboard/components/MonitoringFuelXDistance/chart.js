import palette from 'theme/palette';

export const data = {
  labels: ['1 Aug 21', '2 Aug 21', '3 Aug 21', '4 Aug 21', '5 Aug 21', '6 Aug 21','7 Aug 21'],
  datasets: [{
    type: 'bar',
    label: 'Total Distance',
    data: [1000, 820, 900, 700, 750, 500, 1200],
    borderColor: 'rgb(255, 99, 132)',
    backgroundColor: 'rgba(255, 99, 132, 0.2)'
  }, {
    type: 'line',
    label: 'Fuel Consumption',
    data: [200, 150, 400, 200, 330, 100, 300, 600],
    fill: true,
    borderColor: 'rgb(54, 162, 235)'
  }]
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  legend: { display: true },
  cornerRadius: 10,
  tooltips: {
    enabled: true,
    mode: 'index',
    intersect: false,
    borderWidth: 5,
    borderColor: palette.divider,
    backgroundColor: palette.white,
    titleFontColor: palette.text.primary,
    bodyFontColor: palette.text.secondary,
    footerFontColor: palette.text.secondary
  },
  layout: { padding: 0 },
  scales: {
    xAxes: [
      {
        barThickness: 50,
        maxBarThickness: 50,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        ticks: {
          fontColor: palette.text.secondary
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontColor: palette.text.secondary,
          beginAtZero: true,
          min: 0
        },
 
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: palette.divider
        },
        title: {
          display: true,
          text: 'Value',
          color: '#191',
          font: {
            family: 'Times',
            size: 20,
            style: 'normal',
            lineHeight: 1.2
          }
        },
      }
    ]
  }
};
