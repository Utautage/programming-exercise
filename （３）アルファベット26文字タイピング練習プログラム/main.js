let fail = 0;
const target = "abcdefghijklmnopqrstuvwxyz";
const example = document.getElementById("example");
const typed = document.getElementById("typed");
const record = document.getElementById("record");
let flag = false;
let startTime = new Date();
let endTime = startTime;
let index = 0;
example.innerHTML = target + "<br>";
setInterval(() => {
    if (flag) {
        endTime = new Date();
        document.onkeydown = (e) => {
            if (e.key === target[index]) {
                typed.innerHTML = typed.innerHTML + target[index];
                index++;
                if (index === target.length) flag = false;
            } else {
                fail++
            }
        };
    } else {
        document.onkeydown = (e) => {
            if (e.key === target[0]) {
                flag = true;
                fail = 0;
                index = 1;
                typed.innerHTML = target[0];
                startTime = endTime = new Date();
            }
        };
    }
    record.innerHTML =
        "時間:" +
        (0.001 * (endTime - startTime)).toFixed(3) +
        "秒<br>ミス:" +
        fail +
        "回<br>1文字の平均打鍵時間:" +
        (index === 0 ? 0 : (0.001 * (endTime - startTime)) / index).toFixed(3) +
        "秒";
});
