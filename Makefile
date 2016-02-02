MODULES = Customer

all: clean $(MODULES) java
	mkdir docs
	thrift -r --gen html:standalone -out docs src/Delivery.thrift

	mkdir dist-js
	cat lang/js/thrift-skip.js > dist-js/thrift-sample.js
	cat gen-js/*_types.js >> dist-js/thrift-sample.js
	cat gen-js/*Service.js >> dist-js/thrift-sample.js

	mv gen-php dist-php
	mv gen-cocoa dist-cocoa

	mkdir dist-java
	mkdir dist-java/lib
	mv gen-java dist-java/src
	mv lang/java/thrift-sample.jar dist-java/lib
	cp lang/php/autoload.php dist-php/autoload.php

$(MODULES): %: src/Delivery.thrift
	thrift -r --gen php:server $<
	thrift -r --gen js:jquery $<
	thrift -r --gen cocoa $<
	thrift -r --gen java $<

java:
	mkdir -p lang/java/build
	javac -cp lang/java/libthrift-0.9.2.jar:lang/java/slf4j.jar -d lang/java/build gen-java/com/mesh/delivery/*.java
	jar cvf lang/java/thrift-sample.jar -C lang/java/build/ com

clean: clean-java
	rm -rf gen-* dist-* docs

clean-java:
	rm -rf lang/java/build lang/java/thrift-sample.jar
