import palette from 'theme/palette';

export const data = {
  labels: ['1 Aug 21', '2 Aug 21', '3 Aug 21', '4 Aug 21', '5 Aug 21', '6 Aug 21','7 Aug 21'],
  datasets: [
    {
      label: 'This Week',
      backgroundColor: palette.primary.main,
      data: [900, 511, 800, 300, 529, 1109, 1200]
    }
    // {
    //   label: 'Last year',
    //   backgroundColor: palette.neutral,
    //   data: [11, 20, 12, 29, 30, 25, 13]
    // }
  ]
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  legend: { display: false },
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
