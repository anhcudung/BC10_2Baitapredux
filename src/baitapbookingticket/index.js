import React, { Component } from "react";
import "./index.css";
import ThongTinDatGhe from "./thongtindatghe";
import danhSachGheData from "./img/danhSachGhe.json"
import HangGhe from "./hangghe";
export default class BookingTicket extends Component {

  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe,index) => {
      return <div key={index} >
        <HangGhe hangGhe={hangGhe} sohangGhe={index}/>
      </div>
    })
  }
  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url(./img/bgmovie.jpg)",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="text-warning display-4">
                  Đặt Vé Xem Phim Cyberfilm.vn
                </div>
                <div className="mt-3 text-light" style={{ fontSize: "25px" }}>
                  Màn Hình
                </div>
                <div
                  className="mt-2"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen ml-5"></div>
                  {this.renderHangGhe()}
                  
                </div>
                
              </div>
              <div className="col-4">
                <div
                  style={{ fontSize: "35px" }}
                  className="text-light mt-2"
                >
                  Danh Sách Ghế
                </div>
                <ThongTinDatGhe/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
