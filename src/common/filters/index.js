var moment = require("moment");
moment.locale("zh-cn");
let time = function(params) {
  return moment(params).format("MM月DD日 HH时mm分");
};
let timer = function(parans) {
  return moment(parans).format("YYYY-MM-DD HH:mm");
};
let timeA = function(parans) {
  return moment(parans).format("MM月DD日 HH:mm");
};
let timeB = function(parans) {
  return moment(parans).format("YYYY-MM-DD");
};
let timeC = function(parans) {
  return moment(parans).format("YYYY.MM.DD HH:mm");
};
let timeD = function(parans) {
  return moment(parans).format("HH:mm");
};
let timeE = function(parans) {
  return moment(parans * 1000).format("mm:ss");
};

const toFixPrice = (val, toFix = 2) => {
  let price = 0;
  if (val) {
    if (toFix == 2) {
      price = (val / 100).toFixed(2);
    }
    if (toFix == 1) {
      price = (val / 100).toFixed(1);
    }
    if (toFix == 0) {
      price = val / 100;
    }
  }
  return price;
};

const questionYype = val => {
  if (val == 1) {
    return "单选题";
  } else if (val == 2) {
    return "多选题";
  } else if (val == 3) {
    return "判断题";
  } else if (val == 4) {
    return "连线题";
  }
};

const abcd = val => {
  if (val == 1) {
    return "A";
  } else if (val == 2) {
    return "B";
  } else if (val == 3) {
    return "C";
  } else if (val == 4) {
    return "D";
  }
};
const ABCD = val => {
  if (val == 0) {
    return "A";
  } else if (val == 1) {
    return "B";
  } else if (val == 2) {
    return "C";
  } else if (val == 3) {
    return "D";
  }
};

export default {
  time: time,
  toFixPrice: toFixPrice,
  timer: timer,
  timeA: timeA,
  timeB: timeB,
  timeC: timeC,
  questionYype: questionYype,
  abcd: abcd,
  timeD: timeD,
  ABCD: ABCD,
  timeE: timeE
};
