// Speed Limit = 70, return 'OK'
// 5 -> 1 point, return Points: 1
// Use of Math.floor
// 12 points -> License Suspended

checkSpeed(14);
function checkSpeed(speed) {
  let speedLimit = 70;
  let kmPoints = 5;

  if (speed < speedLimit + kmPoints) {
    console.log('ok');
    return;
  } else {
    let points = Math.floor((speed - speedLimit) / kmPoints);
    console.log('Points: ' + points);

    if (points >= 12) {
      console.log('License Suspended');
    }
  }
}
