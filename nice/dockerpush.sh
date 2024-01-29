
docker build  --platform linux/amd64       -t nice:latest . 
docker tag nice:latest gcr.io/di-services/testimages/nice:latest   

docker push gcr.io/di-services/testimages/nice:latest        