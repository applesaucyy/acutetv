# tv.a-cute

dumb synchronized video stream

## Installation

It _actually does_ need ffmpeg, so your server needs to have that installed. Other than that, the dependencies are in the shard.yml file.
simply run:
```
shards install
crystal build --release src/acutetv.cr && ./acutetv
```
in the folder, and bada bing bada boom the shit should run! The shaka player is precompiled so i dont think it should cause an issue, but if you get a JS error recompile the shaka player

## Attribution

This uses the [Shaka Player](https://github.com/google/shaka-player) for adaptive video streaming. 

## Development

I need all the help i can get. I suck at this.

i have some things planned for a *Roadmap*:
..* Chat
..* File List
..* Actual stream support (for VJs)

But i'm lazy and scatterbrained, and will get to it when i get to it.

## Contributing

1. Fork it (<https://github.com/applesaucyy/acutetv/fork>)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## Contributors

- [applesaucy](https://github.com/applesaucyy) - creator and maintainer
