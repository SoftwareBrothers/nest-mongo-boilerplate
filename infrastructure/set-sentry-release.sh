ENVIRONMENT="$1"

export SENTRY_ORG=organization_name
VERSION=$(sentry-cli releases propose-version)

sentry-cli releases new -p project_name $VERSION
sentry-cli releases set-commits --auto $VERSION
sentry-cli releases deploys $VERSION new -e $ENVIRONMENT
