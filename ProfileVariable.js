import React from 'react';

const LogoAndContent = () => {
  const containerStyle = {
    display: 'flex', // Sử dụng Flexbox
    alignItems: 'center', // Căn giữa các items theo chiều dọc
    justifyContent: 'space-between', // Phân bổ không gian giữa các items
    margin: '0 auto', // Căn giữa container
    maxWidth: '1200px', // Giới hạn chiều rộng tối đa của container
  };

  const logoStyle = {
    width: '50%', // Điều chỉnh chiều rộng của ảnh bằng một nửa chiều rộng của container
    display: 'block', // Đảm bảo ảnh không có khoảng trắng dưới cùng
  };

  const contentStyle = {
    width: '50%', // Điều chỉnh chiều rộng của nội dung bên cạnh logo
    textAlign: 'center', // Căn giữa nội dung
  };

  return (
    <div style={containerStyle}>
        <img src="Screenshot 2024-03-29 090137.png" alt="Logo" style={logoStyle} />
      <div style={contentStyle}>
        <h2>Thông Tin</h2>
        <h2>Liên Hệ</h2>
        <h2>Trang Chủ</h2>
      </div>
    </div>
  );
};

export default LogoAndContent;
