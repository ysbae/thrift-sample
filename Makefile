MODULES = Customer

all: clean $(MODULES) java
	mkdir docs
	thrift -r --gen html:standalone -out docs src/Customer/Account.thrift

	mkdir dist-js
	cat lang/js/thrift-skip.js > dist-js/bootake-thrift.js
	cat gen-js/*_types.js >> dist-js/bootake-thrift.js
	cat gen-js/*Service.js >> dist-js/bootake-thrift.js

	mv gen-php dist-php
	mv gen-cocoa dist-cocoa

	mkdir dist-java
	mkdir dist-java/lib
	mv gen-java dist-java/src
	mv lang/java/bootake-thrift.jar dist-java/lib
	cp lang/php/autoload.php dist-php/autoload.php

$(MODULES): %: src/%/Account.thrift
	thrift -r --gen php:server $<
	thrift -r --gen js:jquery $<
	thrift -r --gen cocoa $<
	thrift -r --gen java $<

java:
	mkdir -p lang/java/build
	javac -cp lang/java/libthrift-0.9.2.jar:lang/java/slf4j.jar -d lang/java/build gen-java/com/bootake/userapp/thrift/*.java
	jar cvf lang/java/bootake-thrift.jar -C lang/java/build/ com

clean: clean-java
	rm -rf gen-* dist-* docs

clean-java:
	rm -rf lang/java/build lang/java/bootake-thrift.jar
