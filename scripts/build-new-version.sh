#!/bin/bash
set -e

PREVIOUS_VERSION_WITH_PREFIX=$(git describe --tags --abbrev=0)
PREVIOUS_VERSION=${PREVIOUS_VERSION_WITH_PREFIX:1}

NEW_VERSION=$(awk -vFS=. -vOFS=. '{$NF++;print}' <<<$PREVIOUS_VERSION)

printf "\n\nTagging latest Git commit with 'v%s':\n" $NEW_VERSION
git tag "v$NEW_VERSION"

IMAGE="santosleijon/santosleijon-dev:$NEW_VERSION"
IMAGE_LATEST="santosleijon/santosleijon-dev:latest"

printf "\n\nBuilding docker image '%s':\n" $IMAGE
docker build -t "$IMAGE" -t "$IMAGE_LATEST" ../

printf "\n\nPushing docker image '%s' to registry:\n" $IMAGE
docker push "$IMAGE"
docker push "$IMAGE_LATEST"
