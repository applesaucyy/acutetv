require "kemal"
require "ecr"
require "file_utils"
require "markdown"

SOCKETS = [] of HTTP::WebSocket
server_stime = Time.now

video_list = [] of String
video_duration = [] of String
playlist_duration = 0
	
Dir.children("public/videos").sort.each do |e|
	video_list.concat(["videos/#{e}"])
end
video_list.shuffle!
    
video_list.each do |v|
	video_duration.concat([`printf %.2f $(ffprobe -i "public/#{v}" -show_entries format=duration -v quiet -of csv="p=0")`.to_f.to_s])
end

video_duration.each do |vd|
	playlist_duration += vd.to_f.round.to_i
end
   
seconds_from_start = 0
current_video = 0
video_position = 0
video_timeoffset = 0
loop_offset = 0
    
get "/" do
	current_time = Time.now
	
	if current_time != server_stime 
		seconds_from_start = (current_time - server_stime).total_seconds.to_i
		
		if seconds_from_start > video_duration[current_video].to_f.round.to_i + video_timeoffset
			video_timeoffset += video_duration[current_video].to_f.round.to_i
			current_video += 1
		end
		if seconds_from_start > playlist_duration + loop_offset && playlist_duration + loop_offset == video_timeoffset 
			loop_offset += playlist_duration
			current_video = 0	
		end
		video_position = seconds_from_start - video_timeoffset
	end
	
    render "public/main.ecr"
end

ws "/video" do |socket|
  SOCKETS << socket
  
  socket.on_message do |message|
    SOCKETS.each { |socket| socket.send message}
  end

  socket.on_close do
    SOCKETS.delete socket
  end
end

get "/staff" do
    render "public/staff.ecr"
end
get "/about" do
    render "public/about.ecr"
end

Kemal.run
