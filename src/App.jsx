import {BrowserRouter, Routes, Route} from 'react-router'
import NavMenu from './NavMenu'
import ScpDetail from './ScpDetail'
import Home from './Home'

export default function App()
{
  return (
    <>
      <header>
        <h1>SCP Foundation</h1>
        <p>Secure, Contain, Protect</p>
      </header>
      <BrowserRouter basename="/SCP-Vite-2026">
        <NavMenu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/scp/:item' element={<ScpDetail />} />
        </Routes>
      </BrowserRouter>
      <footer>
        <p>2026 SCP Foundation | All rights reserved.</p>
      </footer>
    </>
  )
}
