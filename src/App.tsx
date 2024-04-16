
import './App.css'
import { Cart } from './components/AvailableProducts'
import { AvailableProducts } from './components/Cart'
import { Total } from './components/Total'

function App() {
  
  return (
    <>
      <div>
        <Total />
        <AvailableProducts />
        <Cart />
      </div>
    </>
  )
}

export default App
