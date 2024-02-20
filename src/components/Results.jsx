function Results({
  tipAmountOutput,
  totalPerPerson,
  person,
  onReset,
  bill,
  tipAmount,
}) {
  return (
    <div className="mt-8 flex flex-col rounded-2xl bg-secondary p-6 desktop:h-[400px] desktop:w-[400px]">
      <div className="flex items-center justify-between">
        <p className="text-sm text-white">
          Tip Amount <br />{" "}
          <span className="text-xs text-dark_grey">/person</span>
        </p>
        <p className="text-primary desktop:text-output-desktop">
          ${tipAmountOutput && person ? tipAmountOutput : "0.00"}
        </p>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <p className="text-sm text-white">
          Total <br /> <span className="text-xs text-dark_grey">/person</span>
        </p>
        <p className="text-primary desktop:text-output-desktop">
          ${totalPerPerson && person ? totalPerPerson : "0.00"}
        </p>
      </div>
      <button
        disabled={!person && !bill && !tipAmount}
        onClick={onReset}
        className="mt-8 rounded-md bg-primary px-12 py-2 text-btn text-secondary hover:cursor-pointer hover:bg-light_grey disabled:cursor-not-allowed disabled:bg-[hsl(183,78%,24%)] "
      >
        RESET
      </button>
    </div>
  );
}

export default Results;
