export const data = {
  labels: ["h1", "h2", "h3", "h4", "h5", "h6", "h8"],
  datasets: [
    {
      label: "Data One",
      backgroundColor: "#40513B",
      data: [40, 39, 10, 40, 39, 80, 40],
    },
  ],
};
export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};