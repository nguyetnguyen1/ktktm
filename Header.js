import React from 'react';

const Header = () => {
  const headerStyle = {
    textAlign: 'center', // Căn giữa nội dung theo chiều ngang
    margin: '20px 0', // Thêm một chút không gian trên và dưới header
    color: 'navy', // Đặt màu sắc cho tiêu đề (tùy chọn)
  };

  return (
    <header style={headerStyle}>
      <h1>Trang Đăng Ký Hồ Sơ Xét Tuyển Trực Tuyến</h1>
    </header>
  );
};

export default Header;
