.PHONY: all, css
export PATH := ./node_modules/.bin/:$(PATH)

dist/react-bootstrap-calendar.js: $(wildcard index.js components/*.js node_modules/*/package.json)
	browserify index.js \
											-s ReactBootstrapCalendar \
											-o $@

dist/react-bootstrap-calendar.min.js: dist/react-bootstrap-calendar.js
	browserify index.js -t reactify -g uglifyify -s ReactBootstrapCalendar -o $@

all: dist/react-bootstrap-calendar.js dist/react-bootstrap-calendar.min.js

dist/react-bootstrap-calendar.css: styl/default.styl
	stylus -p styl/default.styl > $@

css: dist/react-bootstrap-calendar.css

clean:
	rm dist/*


