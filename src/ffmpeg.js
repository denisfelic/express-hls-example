const ffmpeg = require('fluent-ffmpeg');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

ffmpeg('videos/video.mp4', { timeout: 432000 }).addOptions([
    '-profile:v baseline',
    '-level 3.0',
    '-start_number 0',
    '-hls_time 10',
    '-hls_list_size 0',
    '-f hls'
]).output('videos/output.m3u8')
.on('start', (command) => {
  console.log('start command', command);
})
.on('progress', (progress) => {
  console.log('Processing: ' + progress.percent + '% done');

})
.on('end', () => {
    console.log('end');
}).run();

// ffmpeg -i videos/video.mp4 -profile:v baseline -level 3.0 -s 640x360 -start_number 0 -hls_time 10 -hls_list_size 0 -f hls output.m3u8
// ffmpeg -i videos/video.mp4 -codec: copy -start_number 0 -hls_time 10 -hls_list_size 0 -f hls videos/output.m3u8