console.time("pressureTime");
var url =
  "https://stgapigw-vip.dm.ae/gateway/DMAPIMIntegration/waternetwork/telemetrywithscale?fromDate=1705343400000&toDate=1705429799999&chamberId=SZR_CH_036&mprops=p&scale=10&pageIndex=1&pageSize=200";
function getPressure() {
  fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "x-Gateway-APIKey": "ca2f61e1-467c-444a-9d67-031b9f1460d3",
    },
    method: "GET",
  }).then(async (res) => {
    console.log(await res.json());
  });
}
getPressure();
console.timeEnd("pressureTime");