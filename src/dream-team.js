module.exports = function createDreamTeam(members) {
  let result = "";
  let mas = [];
  if (Array.isArray(members) == false) {
    return false;
  }

  members.forEach(function(item, index) {
    if (typeof item === "string") {
      mas.push(item);
    } else {
    }
  });

  for (let i of mas) {
    i = i.trim();

    if (/(^[a-z])|(^[A-Z])/.test(i) == true) {
      result = result.concat(i.substr(0, 1).toUpperCase());
    }
  }

  if (result.length == 0) {
    return false;
  }

  return result
    .split("")
    .sort()
    .join("");

  // remove line with error and write your code here
};
