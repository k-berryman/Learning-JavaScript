// Challenge given by Codecademy

const getSleepHours = (day) => {
  switch(day) {
    case 'monday':
    return 6;

    case 'tuesday':
    return 7;

    case 'wednesday':
    return 9;

    case 'thursday':
    return 8;

    case 'friday':
    return 9;

    case 'saturday':
    return 9;

    case 'sunday':
    return 10;
  }
};

// console.log(getSleepHours('Sunday'.toLowerCase()));

const getActualSleepHours = () => 
getSleepHours('monday') + getSleepHours('tuesday') +
getSleepHours('wednesday') + getSleepHours('thursday')
+ getSleepHours('friday') + getSleepHours('saturday')
+ getSleepHours('sunday');


const getIdealSleepHours = (idealHours) => {
  return idealHours * 7;
};

// console.log(getActualSleepHours());
// console.log(getIdealSleepHours());

let actualSleepHours = getActualSleepHours();
let idealSleepHours  = getIdealSleepHours(8);

if(actualSleepHours === idealSleepHours) {
  console.log('You got the perfect amount of sleep!');
}

else if(actualSleepHours > idealSleepHours) {
  console.log(`You overslept by ${actualSleepHours - idealSleepHours} hours`);
}

else {
  console.log(`You underslept by ${idealSleepHours - actualSleepHours} hours`);
}
