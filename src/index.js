module.exports = function getZerosCount(number, base) {
  let arrOfPrimes = [2, 3,	5,	7,	11,	13,	17,	19, 23,	29,	31,	37,	41,	43,	47,	53, 59,	61,	67,	71,	73,	79,	83,	89, 97,	101,	103,	107,	109,	113,	127,	131, 137,	139,	149,	151,	157,	163,	167,	173, 179,	181,	191,	193,	197,	199,	211,	223, 227,	229,	233,	239,	241, 251];

  arrOfPrimes.reverse();

  let primes = [];
  let int = 0;
  let count = 0;
  let int2 = 0;
  let count2 = 0;

  do {
    for (let i = 0; i < arrOfPrimes.length; i++) {
      if (base % arrOfPrimes[i] == 0 && number / arrOfPrimes[i] >= 1) {
        base = base / arrOfPrimes[i];
        primes.push(arrOfPrimes[i]);
      }
    }
  } while (base > 1);
  // 1st
  for (let n = 1; Math.pow(primes[0], n) <= number; n++) {
    int = int + Math.floor(number / Math.pow(primes[0], n));
  }

  for (let n = 0; n < primes.length; n++) {
    if (primes[0] == primes[n]) {
      count++;
    }
  }

  // 2nd
  if (primes.length > 1) {
    for (let n = 1; Math.pow(primes[1], n) <= number; n++) {
      int2 = int2 + Math.floor(number / Math.pow(primes[1], n));
    }

    for (let n = 0; n < primes.length; n++) {
      if (primes[1] == primes[n]) {
        count2++;
      }
    }

    return Math.floor(int / count) < Math.floor(int2 / count2) ? Math.floor(int / count) : Math.floor(int2 / count2);
  }

  return Math.floor(int / count);
}
