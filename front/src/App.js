import React from "react"
import '../src/styles/App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Movies } from "./pages/Movies"
import { Movie } from "./pages/Movie"
import { Page404 } from "./pages/Page404"

export default function App() {
  return(
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Movies/>} />
            <Route path="movie" element={<Movie/>} />
            <Route path="*" element={<Page404/>} />
        </Routes>
      </BrowserRouter>
  )
}
