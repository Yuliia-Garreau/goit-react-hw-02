import css from "./Options.module.css";

const Options = ({ onGood, onNeutral, onBad, onReset, totalFeedback }) => {
  return (
    <div className={css.wrapper}>
      <button onClick={onGood} className={css.button}>
        Good
      </button>
      <button onClick={onNeutral} className={css.button}>
        Neutral
      </button>
      <button onClick={onBad} className={css.button}>
        Bad
      </button>

      {totalFeedback > 0 ? (
        <button onClick={onReset} className={css.button}>
          Reset
        </button>
      ) : null}
    </div>
  );
};

export default Options;
