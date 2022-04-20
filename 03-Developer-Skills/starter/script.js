// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const measurekelvin = () => {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // c) fix ___
    value: Number(prompt("Degrees celcius: ")),
  };

  // prompt는 string 반환.
  // console.log(measurement);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);
  // b) finc
  console.table(measurement); // 테이블형태로 보여줌
  const kelvin = measurement.value + 273;
  return kelvin;
};

// a) identify
console.log(measurekelvin());
