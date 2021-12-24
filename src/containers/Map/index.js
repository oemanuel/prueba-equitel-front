import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import { makeSelectPlaces } from './selectors';
import { getPlaces } from './actions';

const Map = ({ places, handleGetPlaces }) => {
  console.log(places)
  return (
    <>
      <button >Get places</button>
    </>
  );
};

Map.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleGetPlaces: PropTypes.func,
  places: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  places: makeSelectPlaces()
});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    handleGetPlaces: () => dispatch(getPlaces()),
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(Map);