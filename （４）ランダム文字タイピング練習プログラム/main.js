let fail = 0;
const prediction = "abcdefghijklmnopqrstuvwxyz";
const target = document.getElementById("target");
const record = document.getElementById("record");
let flag = false;
let startTime = new Date();
let erapsedTime = 0;
let count = 0;
let countMax = 26;
let targetIndex = Math.floor(prediction.length * Math.random());
function change() {
    flag = false
    fail = count = 0;
    erapsedTime = 0;
    let answer = prompt("何回にしますか?");
    if (answer !== null && answer !== "") countMax = parseInt(answer);
}

setInterval(() => {
    if (flag) {
        erapsedTime = 0.001 * (new Date() - startTime);
        document.onkeydown = (e) => {
            if (e.key === prediction[targetIndex]) {
                if (++count === countMax) flag = false;
                targetIndex = Math.floor(prediction.length * Math.random());
            } else fail++;
        };
    } else {
        document.onkeydown = (e) => {
            if (e.key === prediction[targetIndex]) {
                flag = true;
                fail = 0;
                count = 1;
                targetIndex = Math.floor(prediction.length * Math.random());
                startTime= new Date();
            }
        };
    }
    target.innerHTML = prediction[targetIndex];
    record.innerHTML =
        count +
        "/" +
        countMax +
        "<br><br>時間:" +
        erapsedTime.toFixed(3) +
        "秒<br>ミス:" +
        fail +
        "回<br>1文字の平均打鍵時間:" +
        (count === 0 ? 0 : erapsedTime / count).toFixed(3) +
        "秒";
});
