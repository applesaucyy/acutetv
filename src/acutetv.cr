require "kemal"

get "/" do
	render "public/main.ecr"
end

Kemal.run
