export function time2string(timeStamp) {
  timeStamp /= 1000;
  let second = timeStamp%60;
  timeStamp = Math.round(timeStamp-second)/60;
  let minute = timeStamp%60;
  timeStamp = Math.round(timeStamp-minute)/60;
  let hour = timeStamp%24;
  timeStamp = Math.round(timeStamp-hour)/24;
  let day = timeStamp;
  second = second.toFixed(1);
  if (second.length < 4) {
    second = '0'+second;
  }
  return `${day}天${hour}时${minute}分${second}秒`;
}