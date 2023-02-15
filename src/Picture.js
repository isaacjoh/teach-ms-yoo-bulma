import React from "react";

class Picture extends React.Component {
  render() {
    const ratio = this.props.ratio ? "" : "is-4by3";
    return (
      <div className="picture-component">
        <div className="card">
          <div className="card-image">
            <figure className={"image " + ratio} style={this.props.figureStyle}>
              <img src={this.props.src} alt="pic" />
            </figure>
          </div>
          {this.props.text ? (
            <div className="card-content">{this.props.text}</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Picture;
