import React, { useEffect, useMemo, useState } from "react";

const RE_DIGIT = new RegExp(/^\d+$/);

const OTPInput = ({ length, onFinish }) => {
  const [otp, setOtp] = useState("");

  const valueItems = useMemo(() => {
    const values = otp.split("");
    const items = [];
    for (let i = 0; i < length; i++) {
      const char = values[i];
      if (RE_DIGIT.test(char)) items.push(char);
      else items.push("");
    }
    return items;
  }, [otp, length]);

  const onChange = (e, i) => {
    let value = e.target.value;
    const isValueDigit = RE_DIGIT.test(value);
    if (!isValueDigit && value !== "") return;

    value = isValueDigit ? value : " ";

    if (value.length === length) {
      setOtp(value);
      e.target.blur();
      onFinish(value);
      return;
    }

    const newOtp = otp.substring(0, i) + value + otp.substring(i + 1);
    setOtp(newOtp);

    if (i + 1 === length && isValueDigit) onFinish(newOtp);

    if (!isValueDigit) return;

    const nextInputEl = e.target.nextElementSibling;

    if (nextInputEl) nextInputEl.focus();
  };

  const onKeyDown = (e) => {
    e.target.setSelectionRange(0, e.target.value.length);

    if (e.key !== "Backspace" || e.target.value !== "") return;

    const prevInput = e.target.previousElementSibling;
    if (prevInput) prevInput.focus();
  };

  const onFocus = (e) => {
    e.target.setSelectionRange(0, e.target.value.length);
  };

  useEffect(() => {
    const inputs = document.getElementsByClassName("otp-input");
    inputs[0]?.focus();
  }, []);

  return (
    <div className="flex justify-center gap-2 md:gap-3 xl:gap-5">
      {valueItems.map((d, i) => (
        <input
          key={i}
          className="otp-input text-[#242424] auth-input text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold pb-1 md:pb-2"
          placeholder="*"
          maxLength={length}
          autoComplete="one-item-code"
          pattern="\d{1}"
          type="tel"
          inputMode="numeric"
          value={d}
          onChange={(e) => onChange(e, i)}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
        />
      ))}
    </div>
  );
};

export default OTPInput;
