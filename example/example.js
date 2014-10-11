/**
 * @jsx React.DOM
 */

(function() {
  var Calendar = ReactBootstrapCalendar.Calendar,
      React = ReactBootstrapCalendar.React,
      Popover = ReactBootstrapCalendar.ReactBootstrap.Popover,
      OverlayTrigger = ReactBootstrapCalendar.ReactBootstrap.OverlayTrigger,
      Button = ReactBootstrapCalendar.ReactBootstrap.Button;

  var App = React.createClass({
    daySelected: function(m) {
      alert(m.toString());
    },
    render: function() {
      return (
          <div>
            <Calendar onDaySelected={this.daySelected} />
            <Popover placement='top' positionLeft={300} positionTop={300}><Calendar /></Popover>
            <OverlayTrigger trigger="click" overlay={<Popover placement="top"><Calendar /></Popover>}>
              <Button>Open calendar</Button>
            </OverlayTrigger>
          </div>
          );
    }
  });

  React.renderComponent(App(), document.body);
})();
