import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import { Line } from 'react-chartjs-2';
import {
  ComposedChart, XAxis, Area,
} from 'recharts';
import './ForeCastGraph.css';
import CustomAxisTick from './CustomAxisTick';
import CustomTick from './CustomTick';

function prepareDataset(dataset) {
//   const data = {
//     labels: [],
//     datasets: [{
//       fill: true,
//       backgroundColor: 'rgba(255, 99, 71, 0.2)',
//       borderColor: 'rgba(255, 99, 71, 0.8)',
//       label: 'Forecast',
//       data: [],
//     }],
//   };
//   dataset.forEach((obj) => {
//     data.labels.push(obj.dt_txt);
//     data.datasets[0].data.push(obj.main.temp);
//   });

  const data = [];

  dataset.forEach((obj) => {
    data.push({
      name: obj.dt_txt,
      temp: obj.main.temp,
    });
  });

  return data;
}

// const options = {
//   maintainAspectRatio: false,
//   scales: {
//     yAxes: [{
//       display: false,
//     }],
//     xAxes: [{
//       type: 'time',
//       time: {
//         unit: 'day',
//         displayFormats: {
//           day: 'D MMM hA',
//         },
//       },
//     }],
//   },

// };

export default function ForecastGraph({ data }) {
  const [graphData, setGraphData] = useState();
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(200);

  const handleChartWidth = () => {
    const ele = document.getElementById('graph-container');
    setWidth(ele.clientWidth);
    setHeight(ele.clientHeight);
  };

  useEffect(() => {
    const dataset = prepareDataset(data);
    setGraphData(dataset);
    handleChartWidth();
  }, [data]);

  return (
    <div className="graph__container" id="graph-container">
      {/* <Line options={options} data={graphData} /> */}
      <ComposedChart width={width} height={height} data={graphData}>
        <Area
          type="monotone"
          dataKey="temp"
          stroke="rgba(255, 99, 71, 0.8)"
          fill="rgba(255, 99, 71, 0.2)"
          label={CustomAxisTick}
        />
        <XAxis stroke="#bababa" tick={CustomTick} dataKey="name" />
      </ComposedChart>
    </div>
  );
}

ForecastGraph.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.any.isRequired,
};
