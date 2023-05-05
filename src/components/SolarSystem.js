import '../css/SolarSystem.css';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

function SolarSystem() {
  return (
    <>
      <Title headline="Planetas" />
        <hr className='planets-hr'/>
      <div data-testid="solar-system" className="solar-system">
        {
          planets.map((planet) => (
            <PlanetCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
            />
          ))
        }
      </div>
    </>
  );
}

export default SolarSystem;
