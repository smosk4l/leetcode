"use strict";

const percentageLetter = function (s, letter) {
  const reg = new RegExp(letter, "g");
  return Math.trunc(((s.match(reg)?.length || 0) / s.length) * 100);
};

percentageLetter("foobar", "o");
