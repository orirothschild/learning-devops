
docker build  --platform linux/amd64       -t basic:latest .
docker tag basic:latest gcr.io/di-services/testimages/basic:latest

docker push gcr.io/di-services/testimages/basic:latest