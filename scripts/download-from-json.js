const fs = require("fs");
const path = require("path");
const downloadVideos = require("../src/downloadVideos");

let filename = process.argv[2] || "videos.json";
const type = process.argv[3] || "all";

let videos = JSON.parse(fs.readFileSync(path.join(__dirname, "..", filename)));

if (type === "video") {
  videos = videos.filter((video) => video.mime);
} else if (type === "text") {
  videos = videos.filter((video) => !video.mime);
}

!(async () => {
  await downloadVideos(videos);
})();
