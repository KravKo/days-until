import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Cars from './projects/cars/page/index'
import Chess from './projects/chess/page/index'
import Counter from './projects/counter/page/Index'
import Gamble from './projects/gamble/Index'

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
          <Route path="/days-until/"  element={<Counter/>} />
            <Route path="/days-until/project/cars"  element={<Cars/>} />
            <Route path="/days-until/project/chess"  element={<Chess/>} />
            <Route path="/days-until/gambel/mine" element={<Gamble/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
