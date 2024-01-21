console.time("pressureTime");
var url =
  "https://stgapigw-vip.dm.ae/gateway/DMAPIMIntegration/waternetwork/telemetrywithscale_new?chamberId=SMB_CH_090&scale=1&fromDate=1705358616000&toDate=1705445016000";
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
