# k6 with HAR

This will help you create a docker image and start the proxy to capture your request.

# Dockerfile:
  It downloads the necessary components and starts the proxy server via the command.
# start.sh:
  It has the command that starts the proxy server.

# How to start the proxy server.

Clone the GitHub repo and navigate to the folder `[k6-with-har]` and run the following command:

`docker build -t proxy-test .`
This will build an image and then you can run the container using following command:

- Create a directory 'hardata' `mkdir hardata`

`docker run -it -p 9000:9000 -v $PWD/hardata:/opt/har-data proxy-test`

This will start the container and the proxy is listening at 9000 port.
