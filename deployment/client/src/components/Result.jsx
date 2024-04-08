import PropTypes from 'prop-types';

const Result = ({ result }) => {
  return (
    <div>
      <h3>{result ? result : "Click the submit button"}</h3>
    </div>
  );
};

Result.propTypes = {
    result: PropTypes.string.isRequired,
  };

export default Result;
