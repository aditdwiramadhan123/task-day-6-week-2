let timeDuration;
let array= [];
function countDuration(timeDifferent) {
  let differentDay = Math.floor(timeDifferent / (1000 * 60 * 60 * 24));
  let differentMonth = Math.floor(differentDay / 30);
  let differentYear = Math.floor(differentMonth / 12);

  // Set nilai timeDuration
  if (differentYear >= 1) {
    if (differentYear == 1) {
      timeDuration = `${differentYear} year`;
    } else {
      timeDuration = `${differentYear} years`;
    }
  } else if (differentMonth >= 1) {
    if (differentMonth == 1) {
      timeDuration = `${differentMonth} month`;
    } else {
      timeDuration = `${differentMonth} months`;
    }
  } else if (differentDay >= 0) {
    if (differentDay <= 1) {
      timeDuration = `${differentDay} day`;
    } else {
      timeDuration = `${differentDay} days`;
    }
  }

  data = {
    timeDuration
  }
  return data
}

let time = countDuration(10000000000).timeDuration

console.log(time)

