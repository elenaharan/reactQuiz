function FinishScreen({ points, maxPoints }) {
  const percentage = (points / maxPoints) * 100;

  return (
    <p className="result">
      You scored {points} out of {maxPoints} ({percentage}%)
    </p>
  );
}

export default FinishScreen;
