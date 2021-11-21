import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackButtons.module.css';

const FeedbackButtons = ({ feedbackKeysArr, onhandleFeedbackGiven }) => (
  <div className={s.btnWrap}>
    {feedbackKeysArr.map(item => {
      return (
        <button
          key={item}
          type="button"
          className={s.btn}
          onClick={() => onhandleFeedbackGiven(item)}
        >
          {item}
        </button>
      );
    })}
  </div>
);

FeedbackButtons.propTypes = {
  onGood: PropTypes.string,
  onNeutral: PropTypes.string,
  onBad: PropTypes.string,
};

export default FeedbackButtons;
