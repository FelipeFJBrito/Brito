import './App.css';
import MainLayout from './components/mainLayout/MainLayout';
import Header from './components/Header/Header';
import Services from './components/Services/Sercives';
import About from './components/About/About';
import Solution from './components/Solutions/Solution';
import Projects from './components/Project/Projects';
import Contact from './components/Contact/Contact';



function App() {
  return (
    <div className="App">
      <MainLayout>
        <section id='header'>
          <Header />
        </section>
        <section id='services'>
          <Services />
        </section>
        <section id='about'>
          <About />
        </section>
        <section id='solutions'>
          <Solution />
        </section>
        <section id='projects'>
          <Projects />
        </section>
        <section id='contact'>
          <Contact/>
        </section>

      </MainLayout>
    </div>
  );
}

export default App;
