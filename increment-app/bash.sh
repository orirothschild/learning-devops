
docker build  --platform linux/amd64       -t incrementer:latest .
docker tag incrementer:latest gcr.io/di-services/testimages/incrementer:latest

docker push gcr.io/di-services/testimages/incrementer:latest