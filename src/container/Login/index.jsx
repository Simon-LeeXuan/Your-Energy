import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Cell, Input, Button, Checkbox, Toast } from 'zarm';
import cx from 'classnames';
import Captcha from "react-captcha-code";
import CustomIcon from '@/components/CustomIcon';
import { post } from '@/utils'

import s from './style.module.less';

const Login = () => {
  const captchaRef = useRef();
  const [type, setType] = useState('login'); // 登录注册类型
  const [captcha, setCaptcha] = useState(''); // 验证码变化后存储值
  const [username, setUsername] = useState(''); // 账号
  const [password, setPassword] = useState(''); // 密码
  const [verify, setVerify] = useState(''); // 验证码

  //  验证码变化，回调方法
  const handleChange = useCallback((captcha) => {
    setCaptcha(captcha)
  }, []);

  const onSubmit = async () => {
    if (!username) {
      Toast.show('Please enter Telephone number')
      return
    }
    if (!password) {
      Toast.show('Please enter the password')
      return
    }
    try {
      if (type == 'login') {
        const { data } = await post('/api/user/login', {
          username,
          password
        });
        localStorage.setItem('token', data.token);
        window.location.href = '/';
      } else {
        if (!verify) {
          Toast.show('Please enter verification code')
          return
        };
        if (verify != captcha) {
          Toast.show('Verification code error')
          return
        };
        const { data } = await post('/api/user/register', {
          username,
          password
        });
        Toast.show('Registration success');
         setType('login');
      }
    } catch (err) {
      Toast.show(err.msg);
    }
  };

  useEffect(() => {
    document.title = type == 'login' ? 'Login' : 'Sign Up';
  }, [type])
  return <div className={s.auth}>
    <div className={s.head} />
    <div className={s.tab}>
      <span className={cx({ [s.avtive]: type == 'login' })} onClick={() => setType('login')}>Login</span>
      <span className={cx({ [s.avtive]: type == 'register' })} onClick={() => setType('register')}>Sign Up</span>
    </div>
    <div className={s.form}>
      <Cell icon={<CustomIcon type="zhanghao" />}>
        <Input
          clearable
          type="text"
          placeholder="Telephone number"
          onChange={(value) => setUsername(value)}
        />
      </Cell>
      <Cell icon={<CustomIcon type="mima" />}>
        <Input
          clearable
          type="password"
          placeholder="Password"
          onChange={(value) => setPassword(value)}
        />
      </Cell>
      {
        type == 'register' ? <Cell icon={<CustomIcon type="mima" />}>
          <Input
            clearable
            type="text"
            placeholder="Verification code"
            onChange={(value) => setVerify(value)}
          />
          <Captcha ref={captchaRef} charNum={4} onChange={handleChange} />
        </Cell> : null
      }
    </div>
    <div className={s.operation}>
      {
        type == 'register' ? <div className={s.agree}>
          <Checkbox />
          <label className="text-light">Agree to use <i>Energy Bill</i></label>
        </div> : null
      }
      <Button onClick={onSubmit} block theme="primary">{type == 'login' ? 'Login' : 'Sign Up'}</Button>
    </div>
  </div>
};

export default Login;
