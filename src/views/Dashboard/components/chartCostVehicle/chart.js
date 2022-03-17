import palette from 'theme/palette';

export const data = {
  labels: ['1 Aug 21', '2 Aug 21', '3 Aug 21', '4 Aug 21', '5 Aug 21', '6 Aug 21','7 Aug 21'],
  // type: 'bar',
  datasets: [
    {
      label: 'B 7702 NOP',
      backgroundColor: 'rgba(30, 228, 21, 0.8)',
      borderColor: 'rgba(30, 228, 21, 0.8)',
      type: 'bar',
      pointStyle: 'circle',
      fill: false,
      data: [2000000,'','','','','','']
    },
    {
      label: 'B 7341 CSO',
      backgroundColor: 'rgba(21, 73, 228, 0.8)',
      type: 'bar',
      pointStyle: 'circle',
      fill: false,
      data: ['','',1700000,'','']
    },
    {
      label: 'B 7992 BHU',
      backgroundColor: 'rgba(159, 50, 231, 0.8)',
      type: 'bar',
      fill: false,
      data: ['','',1500000,'','','','']
    },
    {
      label: 'B 7921 KAI',
      backgroundColor: 'rgba(14, 50, 227, 0.36)',
      type: 'bar',
      fill: false,
      data: ['','','','','',1300000,'']
    },
    {
      label: 'B 7621 SAO',
      backgroundColor: 'rgba(255, 178, 102)',
      type: 'bar',
      fill: false,
      data: ['','','','',1200000,'','']
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
