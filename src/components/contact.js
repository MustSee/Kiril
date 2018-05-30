import React, { Fragment } from 'react';
import moment from "moment/moment";
import Toastr from './toastr.js';
import firebase from './../conf/firebase';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 30,
};

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      mail: '',
      subject: '',
      toastr: false,
      toastrMessage: '',
      errorTextName: '',
      errorTextSubject: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value,
    });
  };

  handleForm = () => {
    if( this.state.name !== '' && this.state.subject.length > 2 ) {
      const contactMessages = firebase.database().ref('contactMessages');
      const data = {
        date: moment().format('LLLL'),
        name: this.state.name,
        mail: this.state.mail,
        subject: this.state.subject
      };
      contactMessages.push(data)
        .then(() => {
        this.setState(
          {
            name: '',
            mail: '',
            subject: '',
            toastrMessage: 'Successfully sent !',
            toastr: true,
          });
        })
        .catch(() => {
          this.setState(
            {
              toastrMessage: 'Something went wrong. Please try again !',
              toastr: true,
            });
        });
    } else {
      !this.state.name ? this.setState({ errorTextName: 'This field is required.'}) : null;
      this.state.subject.length < 3 ? this.setState({ errorTextSubject: 'This field requires a 3 chars minimum text.'}) : null;
      }
    };

  showToastr = (res) => {
    this.setState({toastr: res});
  };

  stopDisplayError = (errorName) => {
    this.setState({
      [errorName]: '',
    });
  };

  render() {
    return (
      <Fragment>
        <div className="contact-form">
          <TextField
            floatingLabelText="Name"
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
            errorText={this.state.errorTextName}
            onFocus={() => this.stopDisplayError('errorTextName')}
            spellCheck="false"
          />
          <TextField
            floatingLabelText="Your mail for an answer"
            value={this.state.mail}
            name="mail"
            onChange={this.handleChange}
            spellCheck="false"
          />
          <TextField
            floatingLabelText="What's the matter ?"
            value={this.state.subject}
            name="subject"
            onChange={this.handleChange}
            multiLine={true}
            rows={2}
            rowsMax={2}
            errorText={this.state.errorTextSubject}
            onFocus={() => this.stopDisplayError('errorTextSubject')}
            spellCheck="false"
        />
          <RaisedButton label="Submit" primary={true} style={style} onClick={this.handleForm} />
        </div>
        {this.state.toastr ? <Toastr message={this.state.toastrMessage} timeLength={2000} showToastr={this.showToastr} /> : null}
      </Fragment>
    )
  }
}