clear:
	rm -rf src/videos/*.ts
	rm -rf src/videos/output.m3u8          
convert:
	ffmpeg -i src/videos/video.mp4 -codec: copy -start_number 0 -hls_time 10 -hls_list_size 0 -f hls src/videos/output.m3u8         