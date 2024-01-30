
docker build  --platform linux/amd64       -t click-backend:latest . 
docker tag click-backend:latest gcr.io/di-services/testimages/click-backend:latest   

docker push gcr.io/di-services/testimages/click-backend:latest        