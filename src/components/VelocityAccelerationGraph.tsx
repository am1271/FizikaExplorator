import { useState } from "react";
import { animated } from "react-spring";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface GraphData {
  time: number;
  velocity?: number;
  acceleration?: number;
}

const VelocityAccelerationGraph = () => {
  const [distance, setDistance] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [initialVelocity, setInitialVelocity] = useState<number>(0);
  const [accelerationInput, setAccelerationInput] = useState<number>(0);

  // Calculate velocity and acceleration based on user inputs
  const velocityCalculation = (t: number) =>
    initialVelocity + accelerationInput * t;
  const accelerationCalculation = () => accelerationInput;

  // Formatting data for the charts
  const velocityData: GraphData[] = [
    { time: 0, velocity: velocityCalculation(0) },
  ];
  const accelerationData: GraphData[] = [
    { time: 0, acceleration: accelerationCalculation() },
  ];

  // Create an array of data points based on the specified time interval (e.g., 0.1 seconds)
  const timeInterval = 1;
  for (let t = timeInterval; t <= time; t += timeInterval) {
    velocityData.push({ time: t, velocity: velocityCalculation(t) });
    accelerationData.push({ time: t, acceleration: accelerationCalculation() });
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center">Interaktivni grafovi za brzinu i ubrzanje</h2>
      <br />
      {/* User input for distance, time, initial velocity, and acceleration */}
      <div className="row justify-content-center">
        <form className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Put (m):</label>
            <input
              type="number"
              className="form-control"
              value={distance}
              onChange={(e) => setDistance(parseFloat(e.target.value))}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Vrijeme (s):</label>
            <input
              type="number"
              className="form-control"
              value={time}
              onChange={(e) => setTime(parseFloat(e.target.value))}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Početna brzina (m/s):</label>
            <input
              type="number"
              className="form-control"
              value={initialVelocity}
              onChange={(e) => setInitialVelocity(parseFloat(e.target.value))}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Akceleracija (m/s²):</label>
            <input
              type="number"
              className="form-control"
              value={accelerationInput}
              onChange={(e) => setAccelerationInput(parseFloat(e.target.value))}
            />
          </div>
        </form>
      </div>
      <div className="row justify-content-center">
        {/* Grafički prikaz brzine */}
        <br />
        <h3>Brzina</h3>
        <animated.div>
          <LineChart
            width={800}
            height={300}
            data={velocityData}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <XAxis dataKey="time" />
            <YAxis domain={[0, "dataMax"]} />
            <CartesianGrid stroke="#f5f5f5" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="velocity"
              stroke="#ff7300"
              yAxisId={0}
            />
          </LineChart>
        </animated.div>

        {/* Grafički prikaz ubrzanja */}
        <h3>Ubrzanje</h3>
        <animated.div>
          <LineChart
            width={800}
            height={300}
            data={accelerationData}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <XAxis dataKey="time" />
            <YAxis />
            <CartesianGrid stroke="#f5f5f5" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="acceleration"
              stroke="#ff7300"
              yAxisId={0}
            />
          </LineChart>
        </animated.div>
      </div>
    </div>
  );
};

export default VelocityAccelerationGraph;
