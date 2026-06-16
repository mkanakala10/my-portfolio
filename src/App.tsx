import { GradientMesh } from './components/GradientMesh'
import { Navigation } from './components/Navigation'
import { PageCurtain, Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { ThemeWheel } from './components/ThemeWheel'

function App() {
  return (
    <div className="grain relative min-h-screen">
      <PageCurtain />
      <GradientMesh />
      <Navigation />
      <ThemeWheel />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
