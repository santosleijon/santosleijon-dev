podman run -it \
  --name santosleijon-dev \
  --env PORT=3000 \
  -p 3000:3000 \
  --rm \
  santosleijon/santosleijon-dev:latest
