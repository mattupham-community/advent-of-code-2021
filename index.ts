import { readFileSync } from "fs";

const data = readFileSync("./data/day3.txt", "utf8");

const dataArr = data.split(/\s+/g).map((n) => n.split(""));

const maxBits = dataArr[0].length;
const maxInds = maxBits - 1;
let ans1: number;

function part1() {
  function gamma() {
    let ansArr = [];
    for (let i = 0; i <= maxInds; i++) {
      let c = 0;
      let c2 = 0;
      dataArr.forEach((x, index) => {
        if (parseInt(x[i]) == 0) c++;
        else c2++;
      });
      if (c > c2) {
        ansArr.push("0");
      } else {
        ansArr.push("1");
      }
    }
    ans1 = parseInt(ansArr.join(""), 2);
  }
  function elipson() {
    let ansArr = [];
    for (let i = 0; i <= maxInds; i++) {
      let c = 0;
      let c2 = 0;
      dataArr.forEach((x, index) => {
        if (parseInt(x[i]) == 0) c++;
        else c2++;
      });
      if (c > c2) {
        ansArr.push("1");
      } else {
        ansArr.push("0");
      }
    }
    ans1 = parseInt(ansArr.join(""), 2) * ans1;
  }
  gamma();
  elipson();
}
//part1();

function part2() {
  let o2rate: number;
  let co2rate: number;
  function o2() {
    let ansArr = dataArr;
    for (let i = 0; i <= maxInds; i++) {
      let c = 0;
      let c2 = 0;
      ansArr.forEach((x, index) => {
        if (parseInt(x[i]) == 0) c++;
        else c2++;
      });
      console.log(c + "" + c2);
      if (c > c2) {
        ansArr = ansArr.filter((x) => parseInt(x[i]) === 0);
      } else {
        ansArr = ansArr.filter((x) => parseInt(x[i]) === 1);
      }
    }
    o2rate = parseInt(ansArr[0].join(""), 2);
  }
  function co2() {
    let ansArr = dataArr;
    for (let i = 0; i <= maxInds; i++) {
      let c = 0;
      let c2 = 0;
      ansArr.forEach((x, index) => {
        if (parseInt(x[i]) === 0) c++;
        else c2++;
      });
      if (c === c2) {
        ansArr = ansArr.filter((x) => parseInt(x[i]) === 0);
        break;
      }
      if (c < c2) {
        ansArr = ansArr.filter((x) => parseInt(x[i]) === 0);
      } else {
        ansArr = ansArr.filter((x) => parseInt(x[i]) === 1);
      }
    }
    co2rate = parseInt(ansArr[0].join(""), 2);
  }
  o2();
  co2();
  console.log(`The answer to day3 part2 is ${co2rate! * o2rate!}`);
}
part2();
