import React, { Component } from "react";

import { connect } from "react-redux";

class Thongbao extends Component {
  render() {
    return (
      <div>
        <div className="display-4 text-warning">{this.props.ketQua}</div>
        <div className="display-4 text-success">
          Số lần thắng: <span className="text-primary">{this.props.soLanThang}</span>
        </div>
        <div className="display-4 text-success">
          Số lần chơi: <span className="text-primary">{this.props.soLanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ketQua: state.oanTuXiReducer.ketQua,
    soLanThang: state.oanTuXiReducer.soLanThang,
    soLanChoi: state.oanTuXiReducer.soLanChoi,
  };
};

export default connect(mapStateToProps)(Thongbao);
