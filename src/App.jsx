import { Box } from "@chakra-ui/react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {

  return (
<Box>
<Box px={{xl:'48px', md:'20px', base:'10px'}}>
<Header />
<Main />
 </Box>
<Footer />
</Box>
  )
}

export default App
