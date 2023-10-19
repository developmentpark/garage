/**
 * Executes a callback function repeatedly with a specific time interval
 * and a specified number of times.
 *
 * @param {number} interval - The time interval in milliseconds between each execution.
 * @param {number} times - The number of times the callback function will be executed.
 * @param {function} cb - The callback function to be executed in each iteration.
 */
function clock(interval, times, cb) {
  let counter = 0;
  const execute = () => {
    counter++;
    cb(counter);
    if (counter < times) {
      setTimeout(execute, interval);
    }
  };
  execute();
}
