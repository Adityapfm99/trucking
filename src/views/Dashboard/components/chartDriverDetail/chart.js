import palette from 'theme/palette';

export const data = {
  labels: ['1 Aug 21', '2 Aug 21', '3 Aug 21', '4 Aug 21', '5 Aug 21', '6 Aug 21','7 Aug 21'],
  type: 'line',
  datasets: [
    {
      label: 'Driver A',
      backgroundColor: 'rgba(30, 228, 21, 0.8)',
      borderColor: 'rgba(30, 228, 21, 0.8)',
      type: 'line',
      pointStyle: 'circle',
      fill: false,
      data: [1200, 1400, 1500, 1050, 1230, 1800, 690]
    },
    {
      label: 'Driver B',
      borderColor: 'rgba(21, 73, 228, 0.8)',
      type: 'line',
      pointStyle: 'circle',
      fill: false,
      data: [1020, 1900, 1030, 1400, 1280, 870, 400]
    },
    {
      label: 'Driver C',
      borderColor: 'rgba(159, 50, 231, 0.8)',
      type: 'line',
      fill: false,
      data: [1041, 1750, 1102, 1500, 1280, 950, 627]
    },
    {
      label: 'Driver D',
      borderColor: 'rgba(14, 50, 227, 0.36)',
      type: 'line',
      fill: false,
      data: [1010, 1150, 1210, 1330, 1280, 1190, 935]
    },
    {
      label: 'Driver E',
      borderColor: 'rgba(255, 178, 102)',
      type: 'line',
      fill: false,
      data: [1240, 1121, 1191, 1304, 1204, 1458, 1192]
    },
  
  ]
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
    borderWidth: 3,
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
        barThickness: 12,
        maxBarThickness: 10,
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
        }
      }
    ]
  }
};
