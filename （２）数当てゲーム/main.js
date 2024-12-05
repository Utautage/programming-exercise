const number = Math.floor(Math.random() * 10 ** parseInt(prompt("何桁の数当てゲームにしますか?")));
const startTime = new Date();
let count = 1;
let guess;
while (true) {
    guess = parseInt(prompt("数を当ててください"));
    if (guess === number) break;
    count += 1;
    if (guess < number) alert("もっと大きいです");
    else alert("もっと小さいです");
}
const endTime = new Date();
document.write(count, "回,", 0.001 * (endTime - startTime), "秒で正解しました");
