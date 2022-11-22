import '../styles/person.css'
import generateSoftBackground from '../utils/generateSoftBackground'

function Person({ id, firstName, lastName, email }) {
  return (
    <div className="card" style={{ backgroundColor: generateSoftBackground() }}>
      <div className="number">{id}</div>
      <h3>{`${firstName} ${lastName}`}</h3>
      <h4>{email}</h4>
    </div>
  )
}

export default Person
