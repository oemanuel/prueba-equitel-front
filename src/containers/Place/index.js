import { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import { useNavigate, useParams } from 'react-router-dom';
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

import { makeSelectPlace } from './selectors';
import { getPlace } from './actions';

const Place = ({
    place,
    handleGetPlace
}) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const buttonRef = useRef(null);

    useEffect(() => {
        handleGetPlace(id);
    }, []);
    const onDismiss = () => {
        navigate(-1);
    };

    return (
        <Dialog
            aria-labelledby="label"
            onDismiss={onDismiss}
            initialFocusRef={buttonRef}
        >
            <div
                style={{
                    display: "grid",
                    justifyContent: "center",
                    padding: "8px 8px"
                }}
            >
                <h1 id="label" style={{ margin: 0 }}>
                    {place?.name}
                </h1>
                <label>
                    Type : {place?.type}
                </label>
                {
                    place?.comments.map((comment, index) =>
                        <div
                            key={index}
                        >
                            <hr></hr>
                            <h4>
                                {comment.user.name} <strong>{comment.rating}</strong>
                            </h4>
                            <p>
                                {comment.content}
                            </p>
                            <hr></hr>
                        </div>
                    )
                }
                <button
                    style={{ display: "block" }}
                    ref={buttonRef}
                    onClick={onDismiss}
                >
                    Close
                </button>
            </div>
        </Dialog>
    );
};

Place.propTypes = {
    dispatch: PropTypes.func.isRequired,
    handleGetPlace: PropTypes.func,
    place: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
    place: makeSelectPlace()
});

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        handleGetPlace: (payload) => dispatch(getPlace(payload)),
    };
};

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default compose(withConnect)(Place);