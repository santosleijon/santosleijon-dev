docker run -it \
  --name santosleijon-dev \
  --env PORT=80 \
  -p 80:3000 \
  --rm \
  santosleijon/santosleijon-dev:latest
