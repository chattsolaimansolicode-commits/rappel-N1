let videos = [
    ["a", 5, 1200],
    ["b", 2, 2500],
    ["c", 1, 1800],
    ["d", 3, 3000],
    ["e", 4, 2000],
    ["f", 3, 2000]
];

let popularVideos = [];

for (let i = 0; i < videos.length; i++) {
    if (videos[i][2] >= 2000) {
        popularVideos[popularVideos.length] = videos[i];
    }
}

for (let i = 0; i < popularVideos.length; i++) {
    for (let j = i + 1; j < popularVideos.length; j++) {
        if (popularVideos[i][1] > popularVideos[j][1]) {
            let temp = popularVideos[i];
            popularVideos[i] = popularVideos[j];
            popularVideos[j] = temp;
        }
    }
}

let time = 10;
let totalTime = 0;
let watchedVideos = [];

for (let i = 0; i < popularVideos.length; i++) {
    if (totalTime + popularVideos[i][1] <= time) {
        watchedVideos[watchedVideos.length] = popularVideos[i];
        totalTime = totalTime + popularVideos[i][1];
    }
}

console.log("Popular videos :", popularVideos);
console.log("Videos watched :", watchedVideos);
console.log("Number :", watchedVideos.length);
console.log("Total time :", totalTime);