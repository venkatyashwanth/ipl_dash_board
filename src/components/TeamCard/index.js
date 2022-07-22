import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, teamImageUrl} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="listStyling">
      <li className="teamCardStyle">
        <img src={teamImageUrl} alt={name} className="teamLogo" />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
