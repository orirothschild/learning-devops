
docker build  --platform linux/amd64       -t great:latest . 
docker tag great:latest gcr.io/di-services/testimages/great:latest   

docker push gcr.io/di-services/testimages/great:latest        