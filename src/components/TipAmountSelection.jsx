function TipAmountSelection({
  tipAmount,
  onSetTipAmount,
  setCustomTip,
  customTip,
}) {
  const tipAmounts = ["5", "10", "15", "25", "50"];

  const handleCustomTipChange = (e) => {
    const value = e.target.value;
    if (Number(value) <= 100) {
      onSetTipAmount(value);
      setCustomTip(value); // Update custom tip state
    }
  };

  return (
    <div className="mt-8">
      <h1 className="text-sm text-grey">Select Tip %</h1>
      <ul className="mt-4 grid grid-cols-2 gap-4">
        {tipAmounts.map((tip) => {
          return (
            <button
              className={`flex h-12 items-center justify-center rounded-md text-white hover:cursor-pointer hover:bg-primary hover:text-secondary ${tipAmount === tip ? `bg-primary` : "bg-secondary"}`}
              key={tip}
              value={tip}
              onClick={() => onSetTipAmount(tip)}
            >
              {tip}%
            </button>
          );
        })}

        <input
          max={100}
          type="text"
          className={`flex h-12 items-center justify-center rounded-md  border-2 border-very_light_grey bg-very_light_grey px-2 text-end text-secondary outline-none placeholder:text-center hover:cursor-pointer hover:border-primary focus:border-primary`}
          placeholder="Custom"
          value={customTip}
          onChange={handleCustomTipChange}
        />
      </ul>
    </div>
  );
}

export default TipAmountSelection;
