export function getPrice (_price, fixedCount = 2) {
  if ((_price + '').includes('.')) {
    return _price;
  }
  return (_price / 100).toFixed(fixedCount);
}

export function getRandomNum(min, max) {
  return parseInt(Math.random() * (max - min + 1) + min, 10);
}

const letterMap = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

// 获取指定长度随机字符串
export function generateRandomText (length) {
  let res = '';
  for (let i = 0; i < length; i++) {
    res += letterMap[getRandomNum(0, letterMap.length - 1)];
  }
  return res;
}

export function trim (str) {
  return str.replace(/\s/g, '');
}
