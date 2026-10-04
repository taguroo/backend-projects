/*

import plansData from data/plansData.js
import Header from components/Header.jsx
import PricingGrid from components/PricingGrid.jsx

define functional component App

return main layout container:
    render Header component
    render PricingGrid component, passing plansData array to plans prop

*/

import {plansData} from './data/plansData';
import Header from './components/Header';
import PricingGrid from './components/PricingGrid';
import './App.css'

function App() {
  return (
    <main>
      <Header/>
      <PricingGrid plans={plansData} />
    </main>
  )
}

export default App
