// App.js
import React from 'react';
import Header from './Header';
import Logo from './Logo';
import ProfileVariable from './ProfileVariable';
import Form from './Form'; // Import Form component
import RegistrationForm from './RegistrationForm'; // Đảm bảo đường dẫn đến file là đúng
import './App.css'; // Import CSS file for styling

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Logo />
        <div className="profile-variables">
          {/* Các biến hồ sơ khác */}
        </div>
        </div>
      <Form /> {/* Hiển thị Form */}
      <main>
        <RegistrationForm />
      </main>
    </div>
    
  );
};

export default App;
