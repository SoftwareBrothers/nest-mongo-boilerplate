.DEFAULT_GOAL := start

debug:
	docker-compose -f ./docker-compose.yaml -f ./with-debug.yaml up --build -d
sonar:
	docker-compose exec sonarscanner sonar-scanner
sonar-pre:
	docker-compose exec sonarscanner sh -c 'sed -i "s|SF:/home/node/app/|SF:/usr/src/|g" coverage/lcov.info'
start:
	docker-compose -f ./docker-compose.yaml up --build -d
start-mac:
	docker-compose -f ./docker-compose.mac.yaml up --build -d
stop:
	docker-compose -f ./docker-compose.yaml stop
restart:
	make stop && make start
restart-mac:
	make stop && make start-mac
log:
	docker-compose logs -f
app:
	docker exec -it APP_NAME-app sh
tests:
	docker-compose exec node yarn test --verbose
tests-e2e:
	docker-compose exec node yarn test:e2e:local --verbose
