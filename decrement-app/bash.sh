
docker build  --platform linux/amd64       -t decrement:latest .
docker tag decrement:latest gcr.io/di-services/testimages/decrement:latest

docker push gcr.io/di-services/testimages/decrement:latest