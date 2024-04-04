import React from 'react';
import './Form.css'

function Form() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Hồ Sơ Xét Tuyển Trực Tuyến</h2>
      <form id="form-reg" className="bg-light p-4 my-3" action='reg.php' method='post' >
        <div className="form-group">
          <label htmlFor="fullName">Họ và Tên Thí Sinh:</label>
          <input type="text" className="form-control" id="fullName" placeholder="Nhập họ và tên..." />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Giới Tính:</label>
          <select className="form-control" id="gender">
            <option value="1">Nữ</option>
            <option value="2">Nam</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="dob">Ngày Tháng Năm Sinh:</label>
          <input type="date" className="form-control" id="dob" />
        </div>
        <div className="form-group">
          <label htmlFor="placeOfBirth">Nơi Sinh:</label>
          <input type="text" className="form-control" id="placeOfBirth" placeholder="Nhập nơi sinh..." />
        </div>
        <div className="form-group">
          <label htmlFor="ethnicity">Dân Tộc:</label>
          <input type="text" className="form-control" id="ethnicity" placeholder="Nhập dân tộc..." />
        </div>
        <div className="form-group">
          <label htmlFor="religion">Tôn Giáo:</label>
          <input type="text" className="form-control" id="religion" placeholder="Nhập tôn giáo..." />
        </div>
        <div className="form-group">
          <label htmlFor="permanentAddress">Hộ Khẩu Thường Trú:</label>
          <input type="text" className="form-control" id="permanentAddress" placeholder="Nhập hộ khẩu thường trú..." />
        </div>
        <div className="form-group">
          <label htmlFor="schoolTHCS">Nơi Tốt Nghiệp THCS:</label>
          <input type="text" className="form-control" id="schoolTHCS" placeholder="Nhập nơi tốt nghiệp THCS..." />
        </div>
        <div className="form-group">
          <label htmlFor="schoolTHPT">Nơi Tốt Nghiệp THPT:</label>
          <input type="text" className="form-control" id="schoolTHPT" placeholder="Nhập nơi tốt nghiệp THPT..." />
        </div>
        <div className="form-group">
          <label htmlFor="graduationYearTHCS">Năm Tốt Nghiệp THCS:</label>
          <input type="number" className="form-control" id="graduationYearTHCS" placeholder="Nhập năm tốt nghiệp THCS..." />
        </div>
        <div className="form-group">
          <label htmlFor="graduationYearTHPT">Năm Tốt Nghiệp THPT:</label>
          <input type="number" className="form-control" id="graduationYearTHPT" placeholder="Nhập năm tốt nghiệp THPT..." />
        </div>
        <div className="form-group">
          <label htmlFor="idNumber">Số CNND hoặc Thẻ Căn Cước:</label>
          <input type="text" className="form-control" id="idNumber" placeholder="Nhập số CNND hoặc thẻ căn cước..." />
        </div>
        <div className="form-group">
          <label htmlFor="idIssueDate">Ngày Cấp:</label>
          <input type="date" className="form-control" id="idIssueDate" />
        </div>
        <div className="form-group">
          <label htmlFor="idIssuePlace">Nơi Cấp:</label>
          <input type="text" className="form-control" id="idIssuePlace" placeholder="Nhập nơi cấp..." />
        </div>
        <div className="form-group">
          <label htmlFor="contactAddress">Địa Chỉ Gửi Giấy Báo Nhập Học:</label>
          <input type="text" className="form-control" id="contactAddress" placeholder="Nhập địa chỉ gửi giấy báo nhập học..." />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Số Điện Thoại Của Bạn:</label>
          <input type="tel" className="form-control" id="phone" placeholder="Nhập số điện thoại của bạn..." />
        </div>
        <div className="form-group">
          <label htmlFor="parentPhone">Số Điện Thoại Phụ Huynh:</label>
          <input type="tel" className="form-control" id="parentPhone" placeholder="Nhập số điện thoại của phụ huynh..." />
        </div>
      </form>
    </div>
  );
}

export default Form;
