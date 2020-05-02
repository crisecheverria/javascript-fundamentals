// Speed Limit = 70
// 5 -> 1 point
// Use of Math.floor
// 12 points -> License Suspended

function checkSpeed(speed) {
  if (typeof speed != 'number') {
    return 'NaN';
  }
  const speedLimit = 70;
  const kmPerPoints = 5;
  if (speed < speedLimit + kmPerPoints) {
    console.log('OK');
    return;
  }

  let overLimit = speed - speedLimit;
  const points = Math.floor(overLimit / kmPerPoints);
  if (points >= 12) {
    console.log('License Suspended');
  } else {
    console.log('Points: ' + points);
  }
}

checkSpeed(13);
