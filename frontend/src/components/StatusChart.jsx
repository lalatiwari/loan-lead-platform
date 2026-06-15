import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function StatusChart({ stats }) {

  const data = {
    labels: [
      "Approved",
      "Rejected",
      "Pending"
    ],

    datasets: [
      {
        data: [
          stats.approved || 0,
          stats.rejected || 0,
          stats.pending || 0
        ]
      }
    ]
  };

  return (
    <div style={{ maxWidth: "450px" }}>
      <Pie data={data} />
    </div>
  );
}

export default StatusChart;