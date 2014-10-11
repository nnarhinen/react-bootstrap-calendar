react-bootstrap-calendar
========================

A calendar component with built-in styles for bootstrap

Live demo: http://cdn.rawgit.com/nnarhinen/react-bootstrap-calendar/master/example/index.html
Source of demo: [example.js](example/example.js)

Installation
------------

`npm install react-bootstrap-calendar`

Usage
-----

Please use only the npm-installed version for now. I'm having troubles building an umdjs bundle: 
substack/node-browserify#939
```js
var Calendar = require('react-bootstrap-calendar').Calendar,
    React = require('react');

var daySelected = function(m) {
  // m is a moment object
  alert(m.toString());
};

React.renderComponent(<Calendar onDaySelected={daySelected} />, document.body);
```

If you need a more "traditional" datepicker you can make one using react-bootstraps `<OverlayTrigger>` and `<Popover>`:

```js
var Calendar = require('react-bootstrap-calendar').Calendar,
    React = require('react'),
    ReactBootstrap = require('react-bootstrap'),
    OverlayTrigger = ReactBootstrap.OverlayTrigger,
    Popover = ReactBootstrap.Popover;

var App = React.createClass({
  render: function() {
    return (
        <div>
          <OverlayTrgger trigger="click" overlay={<Popover placement="top"><Calendar /></Popover>}>
            <Button>Open datepicker</Button>
          </OverlayTrigger>
        </div>
        );
  }
});
React.renderComponent(<App />, documen.body);
```

Author
------

Niklas Närhinen <niklas@narhinen.net>

License
-------

The MIT license
