import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';
import * as moment from 'moment';

class App extends Component {
  constructor(props) {
    super(props);

    let startDate = '2020-02-14 13:26';
    if (typeof startDate === 'string') {
      const momentDate = moment(startDate, this.getDateFormat());
      startDate = momentDate.isValid() ? momentDate.toDate() : null;
    }

    if (!startDate) {
      startDate = new Date();
    }

    this.state = {
      startDate
    };
  }

  getDateFormat(isUppercase = true) {
    const { showTime, dateFormat } = this.props;
    // let format = isUppercase ? dateFormat.toLocaleUpperCase() : dateFormat;

    // if (showTime) {
    //   const pattern = new RegExp(this.timeFormat, 'i');
    //   format = format.replace(pattern, '').trim();
    //   return `${format} ${this.timeFormat}`;
    // }
    return dateFormat;
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div>
        <DateTimePicker
          onChange={this.onChange}
          value={this.state.startDate}
          disableClock={true}
          format="yyyy-MM-dd hh:mm"
        />
      </div>
    );
  }
}

export default App;
