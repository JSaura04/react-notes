//props example
import PropTypes from 'prop-types';
function Students(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h2>Booleans : {props.isStudent ? "Yes" : "No"}</h2>
    </div>
  );
}
//Props validation
Students.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isStudent: PropTypes.bool.isRequired
}
//Default values for props
Students.defaultProps = {
  name: "Default Name",
  age: 18,
  isStudent: false,
}


export default Students;