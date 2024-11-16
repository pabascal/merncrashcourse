import { Box, Button } from '@chakra-ui/react';
import { Route, Routes } from "react-router-dom";
import CreatePage from './pages/CreatePage'
import HomePage from './pages/HomePage'
import Boobs from './pages/boobs'
import Navbar from './components/NavBar'

function App() {
  return (
    <Box minH={"100vh"}>
      <Navbar />
        <Routes>
          <Route path="/" element = {<HomePage />} />
          <Route path="/create" element = {<CreatePage />} />
          <Route path="/boobs" element = {<Boobs />} />
        </Routes>
    </Box>
  )
}

export default App
