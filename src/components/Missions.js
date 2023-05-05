import '../css/Missions.css';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import Title from './Title';

function Missions() {
  return (
    <div className="mission-container">
      <Title headline="Missões" />
      <div data-testid="missions" className="missions">
        {
          missions.map((mission) => (
            <MissionCard
              key={ mission.name }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />
          ))
        }
      </div>
    </div>
  );
}

export default Missions;