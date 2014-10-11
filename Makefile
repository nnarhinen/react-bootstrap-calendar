.PHONY: all
export PATH := ./node_modules/.bin/:$(PATH)

dist/react-bootstrap-calendar.js: $(wildcard index.js components/*.js node_modules/*/package.json)
	browserify index.js \
											-s ReactBootstrapCalendar \
											-o $@

dist/react-bootstrap-calendar.min.js: dist/react-bootstrap-calendar.js
	browserify index.js -t reactify -g uglifyify -s ReactBootstrapCalendar -o $@

all: dist/react-bootstrap-calendar.js dist/react-bootstrap-calendar.min.js

clean:
	rm dist/*


