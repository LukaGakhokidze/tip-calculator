import { useState } from "react";
import Input from "./Input";
import TipAmountSelection from "./TipAmountSelection";
import Results from "./Results";

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [person, setPerson] = useState("");
  const [tipAmount, setTipAmount] = useState("");
  const [error, setError] = useState("");
  const [customTip, setCustomTip] = useState("");

  const billNumeric = Number(bill);
  const tipAmountNumeric = Number(tipAmount);
  const personNumeric = Number(person);

  //formatting the outputs to 2 digits

  const tipOutputPerPerson = (
    (billNumeric * tipAmountNumeric) /
    100 /
    personNumeric
  ).toFixed(2);

  const totalAmountPerPerson = (
    (billNumeric + (billNumeric * tipAmountNumeric) / 100) /
    personNumeric
  ).toFixed(2);

  // Bill input setting and validation

  const handleBillChange = (e) => {
    let value = e.target.value;

    // Check if the value is numeric, optionally contains a single dot,
    // doesn't exceed 6 characters, and starts with a nonzero digit unless it's "0" or a decimal "0.XXX"
    if (
      value === "0" ||
      (value.length <= 6 && /^0?\d*\.?\d*$/.test(value) && value !== "0.")
    ) {
      setBill(value);
    } else if (/^0\.\d?$/.test(value)) {
      // Allows for a valid decimal input starting with zero
      setBill(value);
    }
  };

  // Person input validation && setting

  const handlePersonChange = (e) => {
    let value = e.target.value;

    // Clear any previous error message at the start if the user is correcting the input
    if (value === "" || /^[1-9]\d?$/.test(value)) {
      setError("");
    }

    // If the value is a valid positive integer that doesn't exceed two digits, update the state
    if (/^[1-9]\d?$/.test(value)) {
      setPerson(value);
    } else if (value === "") {
      // Allow the field to be cleared without setting an error
      // Still update the person state to reflect the empty input correctly
      setPerson(value);
    } else {
      // If the input is invalid (not a positive integer or exceeds two digits), check if bill and selectedTip are not empty
      if (bill && tipAmount) {
        setError("Please enter a valid number of persons");
        console.log(error);
      }
    }
  };

  const handleTipSelection = (tip) => {
    // If the currently selected tip is clicked again, clear the selection
    if (tipAmount === tip) {
      setTipAmount(""); // Clear the tip amount
      setCustomTip(""); // Also clear the custom input field
    } else {
      setTipAmount(tip); // Set the new tip amount
      setCustomTip(""); // Clear the custom input field
    }
  };

  const handleReset = () => {
    setBill("");
    setTipAmount("");
    setPerson("");
    setCustomTip("");
  };

  return (
    <div
      className="h-screen w-screen items-center justify-between rounded-t-[25px] bg-white p-8  desktop:flex desktop:h-1/2 desktop:w-2/3 desktop:rounded-[25px] desktop:drop-shadow-custom
     "
    >
      <div className="desktop:w-1/2 ">
        <Input
          error={error}
          title={"Bill"}
          inputImage={"assets/images/icon-dollar.svg"}
          value={bill}
          onChange={handleBillChange}
        />
        <TipAmountSelection
          tipAmount={tipAmount}
          onSetTipAmount={handleTipSelection}
          customTip={customTip}
          setCustomTip={setCustomTip}
        />
        <div className="mt-8">
          <Input
            error={error}
            title={"Number of People"}
            inputImage={"assets/images/icon-person.svg"}
            value={person}
            onChange={handlePersonChange}
          />
        </div>
      </div>
      <Results
        bill={bill}
        tipAmount={tipAmount}
        person={person}
        tipAmountOutput={tipOutputPerPerson}
        totalPerPerson={totalAmountPerPerson}
        onReset={handleReset}
      />
    </div>
  );
}

export default TipCalculator;
