import React from 'react';

function RegistrationForm() {
    return (
        <div className="container">
            <h1>ĐĂNG KÝ XÉT TUYỂN</h1>
            <form action="#">
                <h2>Ngành đăng ký xét tuyển:</h2>
                <div className="form-group">
                    <input type="checkbox" id="design" name="nganh" value="Thiết kế đồ" />
                    <label htmlFor="design">Thiết kế đồ</label>
                </div>
                <div className="form-group">
                    <input type="checkbox" id="it" name="nganh" value="Công nghệ thông tin" />
                    <label htmlFor="it">Công nghệ thông tin</label>
                </div>
                <div className="form-group">
                    <input type="checkbox" id="english" name="nganh" value="Tiếng Anh" />
                    <label htmlFor="english">Tiếng Anh</label>
                </div>
                <div className="form-group">
                    <input type="checkbox" id="korean" name="nganh" value="Tiếng Hàn" />
                    <label htmlFor="korean">Tiếng Hàn</label>
                </div>

                {/* Phần thông tin cá nhân, nếu cần */}

                <button type="submit">Đăng ký</button>
            </form>
        </div>
    );
}

export default RegistrationForm;
