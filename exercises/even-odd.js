function showNumbers(limit) {
  for (let num = 0; num <= limit; num++) {
    const msg = num % 2 === 0 ? 'EVEN' : 'ODD';
    console.log(num, msg);
  }
}

showNumbers(10);
