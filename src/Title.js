import React from 'react'

class Title extends React.Component {
  render() {
    return (
      <div className="title-component">
        <h2 className="title">
          {this.props.text}
        </h2>
      </div>
    );
  }
}

export default Title