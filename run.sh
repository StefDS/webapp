docker rm webapp
docker run --name webapp -d -p 8090:8090 stefds/webapp
