import css from "./Feedback.module.css";
const Feedback = ({ feedback, totalFeedback, onPositiveFeedback }) => {
  return (
    <div className={css.wrapper}>
      <p className={css.feedback}>Good: {feedback.good}</p>
      <p className={css.feedback}>Neutral: {feedback.neutral}</p>
      <p className={css.feedback}>Bad: {feedback.bad}</p>
      <p className={css.feedback}>Total: {totalFeedback}</p>
      <p className={css.feedback}>Positive: {onPositiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
