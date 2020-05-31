
build:	
	docker build --tag bluescape .

test:	
	docker run bluescape npx codeceptjs run --steps
