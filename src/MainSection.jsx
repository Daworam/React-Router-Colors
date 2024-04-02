import { Route, Routes } from "react-router-dom"
import Red from './Red'
import Blue from './Blue'
import Home from './Home'
import Green from './Green'

const MainSection = () => {
  return(
    <div id="main-section">
        <Routes>
          <Route path='/red' element={<Red/>}></Route>
          <Route path='/blue' element={<Blue/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/green' element={<Green/>}></Route>
        </Routes>
      </div>
  )
}

export default MainSection