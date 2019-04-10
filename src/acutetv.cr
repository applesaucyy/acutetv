require "kemal"
require "ecr"
require "file_utils"
require "markdown"
require "kemal-basic-auth"

def v_dur(v)
    return `ffmpeg -i #{v} 2>&1 | grep "Duration"| cut -d ' ' -f 4 | sed s/,// | sed 's@\..*@@g' | awk '{ split($1, A, ":"); split(A[3], B, "."); print 3600*A[1] + 60*A[2] + B[1] }'`
end
get "/" do
    v_list = Dir.children("public/videos")
    sch_ts = Time.now()
    sch_ts_n1 = v_dur(v_list[0])
    render "public/main.ecr"
end
get "/staff" do
    render "public/staff.ecr"
end
get "/about" do
    render "public/about.ecr"
end
post "/login" do
    basic_auth({"applesaucy" => "@@maple234", "guest" => "~L}D(\+6DZ?B#N(_!9X"})   
end
get "/login" do |env|
    #render "public/login.ecr"
    "Hi, %s!" % env.kemal_authorized_username?
end

Kemal.run
