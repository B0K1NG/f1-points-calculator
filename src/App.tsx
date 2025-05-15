import { useState } from 'react'

import PointsForm from './components/PointsForm';
import PointsResult from './components/PointsResult';
import { type PointsResult as PointsResultType } from './types';

import './styles/main.css'

function App() {
  const [result, setResult] = useState<PointsResultType | null>(null);

  return (
    <>
      <div className='f1-calculator'>
        <header>
          <h1>F1 Points Calculator</h1>
        </header>

        <main>
          <PointsForm onCalculate={setResult} />
          {result && <PointsResult result={result} />}
        </main>

        <footer>
          <div className='points-reference'>
            <h3>F1 Points System</h3>
            <table>
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Points</th>
                </tr>
              </thead>

              <tbody>
              <tr><td>1st</td><td>25</td></tr>
              <tr><td>2nd</td><td>18</td></tr>
              <tr><td>3rd</td><td>15</td></tr>
              <tr><td>4th</td><td>12</td></tr>
              <tr><td>5th</td><td>10</td></tr>
              <tr><td>6th</td><td>8</td></tr>
              <tr><td>7th</td><td>6</td></tr>
              <tr><td>8th</td><td>4</td></tr>
              <tr><td>9th</td><td>2</td></tr>
              <tr><td>10th</td><td>1</td></tr>
              <tr><td>11th+</td><td>0</td></tr>
              </tbody>
            </table>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
