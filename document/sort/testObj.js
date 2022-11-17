let data = [
  {code: "BW4-J7", concentration: "0.3", signalStrength: 1, status: "0", target: "氨氮"},
  {code: "BW4-J7", concentration: "22.6", signalStrength: 1, status: "0", target: "水温", unit: "℃"},
  {code: "BW4-J7", concentration: "6", signalStrength: 1, status: "0", target: "水中PH", unit: "pH"},
  {code: "BW4-J7", concentration: "0", signalStrength: 1, status: "0", target: "液位", unit: "m"},
  {code: "BW3-J5", concentration: "0.18", signalStrength: 1, status: "1", target: "氨氮", unit: "mg/L"},
  {code: "BW3-J5", concentration: "22.7", signalStrength: 1, status: "1", target: "水温", unit: "℃"},
  {code: "BW2-J3", concentration: "0.38", signalStrength: 2, status: "1", target: "氨氮", unit: "mg/L"}
]

let _res = [];

let map = new Map();

data.map((dataItem) => {
  if (!map.has(dataItem.code)) {
     let _temp = [];
     _temp.push(dataItem)
     map.set(dataItem.code, _temp);
  } else {
    let codeList = map.get(dataItem.code);
    codeList.push(dataItem);
    map.set(dataItem.code, codeList);
  }
});

map.forEach((v, k) => {
  v.unshift({ target: `监测井 + ${k}`, status: 1, signalStrength: 1, isTitle: true },);
  _res.push(...v);
})

console.log(_res);