import { useState } from 'react';
import Section from './Components/Feedback/Section/Section';
import FeedbackButtons from './Components/Feedback/FeedbackButtons/FeedbackButtons';
import Statistics from './Components/Feedback/Statistics/Statistics';
import Notification from './Components/Feedback/Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setneutral] = useState(0);
  const [bad, setbad] = useState(0);

  const handleFeedbackGiven = key => {
    const increment = prevState => prevState + 1;
    switch (key) {
      case 'good':
        setGood(increment);
        break;
      case 'neutral':
        setneutral(increment);
        break;
      case 'bad':
        setbad(increment);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let positiveFeedbackPercentage = 0;
    if (good !== 0) {
      positiveFeedbackPercentage = Math.round(
        (good / countTotalFeedback()) * 100,
      );
    }
    return positiveFeedbackPercentage;
  };

  return (
    <div className="app">
      <Section title={'Please leave feedback'}>
        <FeedbackButtons
          feedbackKeysArr={['good', 'neutral', 'bad']}
          onhandleFeedbackGiven={handleFeedbackGiven}
        />
      </Section>

      <Section title={'Statistics'}>
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedback={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}
