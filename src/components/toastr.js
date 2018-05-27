import React from 'react';

export default class Toastr extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.showToastr(false);
    }, 2000);
  }

  render() {
    return (
      <div className="toastrWrapper">
        <div className="toastr">
          {this.props.message}
        </div>
      </div>
    )
  }
}