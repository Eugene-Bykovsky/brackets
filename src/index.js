module.exports = function check(str, bracketsConfig) {
  let data = str.split(''),
      config = bracketsConfig,
      stack = [],
      current = [];

  data.forEach(element => {
    for (let i = 0; i < config.length; i++) {
      if (config[i].indexOf(element) != -1) {
        if (config[i][0] === element 
          & config[i][1] === element 
          & stack.indexOf(element) != -1) {
          if (i === current[current.length - 1]) {
            stack.pop();
            current.pop();
          }
        } else if (config[i][0] === element) {
          stack.push(element);
          current.push(i);
        } else if (i === current[current.length - 1] 
          & config[i][1] === element 
          & stack.indexOf(config[i][0]) != -1) {
          stack.pop();
          current.pop();
        } else {
          stack.push(element);
          current.push(i);
        }
      }
    }
  });

  let result = (stack.length === 0) ? true : false;
  return result;
}
