/**
 * @jsx React.DOM
 */

var React = require('react'),
    Table = require('react-bootstrap').Table,
    moment = require('moment');

require('moment-range');

var Calendar = module.exports = React.createClass({
  getInitialState: function() {
    var today = new Date();
    return {
      month: today,
      today: today,
      selectedDate: this.props.selectedDate
    };
  },
  prevMonth: function(ev) {
    this.setState({
      month: moment(this.state.month).add(-1, 'months').toDate()
    });
  },
  nextMonth: function(ev) {
    this.setState({
      month: moment(this.state.month).add(1, 'months').toDate()
    });
  },
  render: function() {
    var start = moment(this.state.month).startOf('month').startOf('isoWeek'),
        m = moment(this.state.month),
        stop = moment(this.state.month).endOf('month').endOf('isoWeek'),
        month = [],
        self = this;

    moment().range(start, stop).by('weeks', function(w) {
      var week = [];
      month.push(week);
      moment().range(w, moment(w).endOf('isoWeek')).by('days', function(d) {
        week.push(d);
      });
    });

    var dayCallback = function(m) {
      return function(ev) {
        self.setState({
          selectedDate: m
        });
        self.props.onDaySelected && self.props.onDaySelected(m);
      };
    };


    return (
          <Table className="rbc-calendar">
            <thead>
              <tr>
                <th onClick={this.prevMonth}><i className="fa fa-arrow-left icon-arrow-left glyphicon glyphicon-arrow-left"></i></th>
                <th colSpan="5">{m.get('month')+1} / {m.get('year')}</th>
                <th onClick={this.nextMonth}><i className="fa fa-arrow-right icon-arrow-right glyphicon glyphicon-arrow-right"></i></th>
              </tr>
              <tr>
                <th>Mo</th>
                <th>Tu</th>
                <th>We</th>
                <th>Th</th>
                <th>Fr</th>
                <th>Sa</th>
                <th>Su</th>
              </tr>
            </thead>
            <tbody>
            { month.map(function(w) {
                return (
                <tr key={w[0].get('week')}>
                { w.map(function(d) {
                    var cls = d.isSame(self.state.today, 'day') ? 'rbc-today' : '';
                    if (self.state.selectedDate && d.isSame(self.state.selectedDate, 'day')) cls += ' rbc-selected-date';
                    return <td className={cls} key={d.get('date')} onClick={dayCallback(d)}>{ d.get('date') }</td>;
                  }) }
                </tr>
                  );
              }) }
            </tbody>
          </Table>
       );

  }
});
