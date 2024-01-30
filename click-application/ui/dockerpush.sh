
docker build  --platform linux/amd64       -t click-ui:latest . 
docker tag click-ui:latest gcr.io/di-services/testimages/click-ui:latest   

docker push gcr.io/di-services/testimages/click-ui:latest        