import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

AOS.init();

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  useEffect(() => {
    document.body.style.backgroundImage = `url('https://apod.nasa.gov/apod/image/0802/v838feb04_hst_big.jpg')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed';
  }, []);

  const loginUser = async (e)=>{

    const user ={
      email,
      password
    };
    try {
      const response = await axios.post('https://new-iatt.onrender.com/auth/login', user);
      localStorage.setItem('token', response.data.token);
      alert('Login successful!');
      console.log(localStorage);
      window.location.href='/home';
    } catch (error) {
      alert('Invalid email or password');
    }

  }

  

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col xs={22} sm={16} md={12} lg={8}>
        <Form
          name="loginForm"
          initialValues={{ remember: true }}
          onFinish={loginUser}
          style={{
            borderRadius: 4,
            padding: 40,
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.9)',
          }}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h1>Login</h1>
          <img
            src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
            alt="Login"
            style={{ width: '100px', marginBottom: 20, borderRadius: '50%' }}
          />
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" value={email} onChange={handleEmailChange} />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input prefix={<LockOutlined />} type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: '100%',
                backgroundColor: '#08285c',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
              }}
            >
              Log in
            </Button>
          </Form.Item>
          <p>
            Don't have an account? <Link to="/register" style={{ color: 'white' }}>Sign Up</Link>
          </p>
        </Form>
      </Col>
    </Row>
  );
};

export default LoginPage;
