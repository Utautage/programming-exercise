const random = Math.random() * 81;
if (random < 23) document.write("大吉");
else if (random < 41) document.write("吉");
else if (random < 57) document.write("中吉");
else if (random < 70) document.write("小吉");
else document.write("凶");
