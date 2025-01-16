import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import { useEffect, useState } from "react";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const feedbackClicks = window.localStorage.getItem("feedback-clicks");

    if (feedbackClicks !== null) {
      return JSON.parse(feedbackClicks);
    }

    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("feedback-clicks", JSON.stringify(feedback));
  }, [feedback]);
  const updateFeedback = (feedbackType) => {
    setFeedback((feedback) => ({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    }));
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  const updateReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <>
      <Description />
      <Options
        onGood={() => updateFeedback("good")}
        onNeutral={() => updateFeedback("neutral")}
        onBad={() => updateFeedback("bad")}
        onReset={updateReset}
        totalFeedback={totalFeedback}
        onPositiveFeedback={positiveFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          onPositiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
