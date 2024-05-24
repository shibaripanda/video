import React from "react"
import '../src/styles/App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Movies } from "./pages/Movies"
import { Movie } from "./pages/Movie"
import { Page404 } from "./pages/Page404"
import { MantineProvider } from '@mantine/core'
import { Raited } from "./pages/Raited"

// const theme = createTheme({
//   /** Put your mantine theme override here */
// });

export default function App() {
  // const theme = useMantineTheme()
  return(
      <MantineProvider>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Movies/>} />
              <Route path="movie/*" element={<Movie/>} />
              <Route path="raited" element={<Raited/>} />
              <Route path="*" element={<Page404/>} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
  )
}
