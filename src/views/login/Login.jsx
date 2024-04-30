import React from 'react'
import './index.less'
import SwitchDark from '@/components/SwitchDark'
import loginLeft from "@/assets/images/login_left.png";
import logo from "@/assets/images/logo.png";
import LoginForm from './component/LoginForm';

export default function Login() {
  return (
    <div className='login-container'>
      <SwitchDark />
      <div className="login-box">
        <div className="login-left">
          <img src={loginLeft} alt="" />
        </div>
        <div className="login-form">
        <div className="login-logo">
						<img className="login-icon" src={logo} alt="logo" />
						<span className="logo-text">Hooks-Admin</span>
					</div>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
