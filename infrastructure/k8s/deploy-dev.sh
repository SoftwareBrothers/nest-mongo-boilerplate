#!/bin/bash

echo "Setting up env variables"
set -e

echo "Deploying to Kubernetes..."
kubectl kustomize /deploy/infrastructure/k8s/environments/dev | kubectl apply -f - && \
kubectl set image deployment/api-deployment api=IMAGE_URL:$CI_COMMIT_ID

echo "Image was deployed"
