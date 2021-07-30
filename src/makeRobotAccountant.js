'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(x) {
    count++;

    return function(y) {
      return (count <= 3)
        ? x + y
        : (count % 2 === 0 && count > 3)
          ? 'Bzzz... Error!' : x + y;
    };
  };
}

module.exports = makeRobotAccountant;
