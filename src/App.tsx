import './App.scss'
import Background from './components/Background/Background'
import { Carousel } from './components/Carousel/Carousel'
import { Header } from './components/Header/Header'
import { MovieCard } from './components/MovieCard/MovieCard'
import { movie, reccomended } from './data/data'


function App() {
  return (
    <>

        <Background />

      <Header />
      <MovieCard movie={movie} />
      <Carousel movies={reccomended} />
    </>
  )
}

export default App
