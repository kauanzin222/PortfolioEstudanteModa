import './App.css'

// components
import Header from './components/Header'
import NavBar from './components/NavBar'
import NavBarSection from './components/NavBarSection'
import About from './components/sectionsNavBar/About'
import Habilities from './components/sectionsNavBar/Habilities'
import ProjectsSection from './components/sectionsNavBar/projects/ProjectsSection'
import { useSmoothScroll } from './hooks/useSmoothScroll'

function App() {
  useSmoothScroll()

  return (
    <>
      <NavBar />
      <Header />
      <NavBarSection />
      <About />
      <Habilities />
      <ProjectsSection />
    </>
  )
}

export default App
