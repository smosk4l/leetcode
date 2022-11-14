const defangIPaddr = function (address) {
  return address.replaceAll(".", "[.]");
};
