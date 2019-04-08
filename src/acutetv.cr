require "kemal"
require "ecr"
require "file_utils"
require "markdown"

get "/" do
    v_list = Dir.children("public/videos")
    render "public/main.ecr"
end

Kemal.run
