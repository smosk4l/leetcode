const compose = function (functions) {
  return function (x) {
    return functions.reduceRight((acc, f) => f(acc), x);
  };
};

const fn = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
fn(4);
