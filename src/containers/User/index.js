import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import { makeSelectName } from './selectors';
import { change, register, login } from './actions';

const User = ({ name, handleChange, handleRegister, handleLogin }) => {
  return (
    <>
      <div>
        <input value={name} onChange={handleChange} />
      </div>
      <div>
        <Link onClick={handleLogin} to='/places'>Login</Link>
      </div>
      <div>
        <button onClick={handleRegister} >Register</button>
      </div>
    </>
  );
};

User.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleChange: PropTypes.func,
  handleRegister: PropTypes.func,
  handleLogin: PropTypes.func,
  name: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  name: makeSelectName()
});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    handleChange: (event) => dispatch(change(event.target)),
    handleRegister: () => dispatch(register()),
    handleLogin: () => dispatch(login()),
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(User);