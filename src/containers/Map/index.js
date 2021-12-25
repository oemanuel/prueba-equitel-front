import { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import { makeSelectPlaces } from './selectors';
import { getPlaces } from './actions';

import MapWrapper from '../../components/Map';

const Map = ({ places, handleGetPlaces }) => {

  useEffect(() => {
    handleGetPlaces();
  },[]);
  return (
    <>
      <MapWrapper places={places}></MapWrapper>
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