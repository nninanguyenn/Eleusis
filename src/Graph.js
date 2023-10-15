import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';

import { collection, query, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import "./Graph.css";


const chartOptions = {
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          parser: "YYYY-MM-DD", 
          unit: "day",
          displayFormats: {
            day: "MMM D",
          },
        },
      },
    ],
  },
};

Chart.register(CategoryScale);


const fetchFlagsHistory = async (userId) => {
  const playedDatesRef = collection(db, "users", userId, "PlayedDates");
  const q = query(playedDatesRef);

  const querySnapshot = await getDocs(q);
  let history = [];

  querySnapshot.forEach((doc) => {
    history.push({ ...doc.data(), date: doc.id });
  });

  return history;
};

const processFlagData = (history) => {
  let dates = [];
  let happy = [];
  let calm = [];
  let frustrated = [];
  let anxious = [];
  let neutral = [];
  let aggressive = [];
  let motivated = [];
  let sad = [];
  history.forEach((data) => {
    dates.push(data.date);
    happy.push(data.flags.happy);
    calm.push(data.flags.calm);
    frustrated.push(data.flags.frustrated);
    anxious.push(data.flags.anxious);
    neutral.push(data.flags.neutral);
    aggressive.push(data.flags.aggressive);
    motivated.push(data.flags.motivated);
    sad.push(data.flags.sad);
  })
  return { dates, happy, calm, frustrated, anxious, neutral, aggressive, motivated, sad };
};

const Graph = ({ userId }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const history = await fetchFlagsHistory(userId);
      const processedData = processFlagData(history);
      setData(processedData);
    };

    fetchData();
  }, [userId]);

  if (!data) return <p>Loading...</p>;

  const chartData = {
    labels: data.dates,
    datasets: [
      {
        label: "Aggressive",
        data: data.aggressive,
        borderColor: "#FF0000",
      },
      {
        label: "Anxious",
        data: data.anxious,
        borderColor: "teal",
      },
      {
        label: "Calm",
        data: data.calm,
        borderColor: "#888FFF",
      },
      {
        label: "Frustrated",
        data: data.frustrated,
        borderColor: "#AD0000",
      },
      {
        label: "Happy",
        data: data.happy,
        borderColor: "#FAFF4E",
      },
      {
        label: "Motivated",
        data: data.motivated,
        borderColor: "#88FF88",
      },
      {
        label: "Neutral",
        data: data.neutral,
        borderColor: "grey",
      },
      {
        label: "Sad",
        data: data.sad,
        borderColor: "navy",
      },
    ],
  };

  return (
    <div className="chart-container">
      <Line data={chartData} options={chartOptions} />
    </div>
  );};

export default Graph;
