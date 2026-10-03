import { films } from './data/films'
import { pets } from './data/animals'
import './App.css'
import Film from './components/Film'
import Page from './components/Page'
import CurrentTime from './components/CurrentTime'
import Animal from './components/Animal'


function App() {
  return (
    <div className="m-2">
      <div className="flex gap-4 flex-wrap justify-center">
        {films.map((film) => (
          <Film
            name={film.name}
            director={film.director}
            year={film.year}
            studio={film.studio}
            revenue={film.revenue}
          />
        ))}
      </div>
      <div className="flex">
        <Page
          fullName="Sasha"
          phone="0667636579"
          email="sahsadkaopro@mgial.com"
          location="Uzhhhordod"
          experience="5 years senior developer"
          skills={['TS', 'JS', 'React', 'Vite', 'Tailwiind']}
        />
      </div>
      <div>
        <CurrentTime/>
      </div>
      <div className='flex gap-4 flex-wrap justify-center'>
        {pets.map(pet => <Animal
                          name={pet.name}
                          type={pet.type}
                          age={pet.age} />)}
      </div>

    </div>
  )
}

export default App
