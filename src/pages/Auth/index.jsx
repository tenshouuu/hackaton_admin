import React from 'react';
import { Redirect } from 'react-router-dom';

import { useAuthUser } from 'store/user';
import { useSelector } from 'react-redux';

import {
  Form, Input, Button, Checkbox,
} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {
  AuthRoot, Container, StyledLogo, Area, AreaWrapper, Block,
} from './styled';

function Auth() {
  const authUser = useAuthUser();
  const onFinish = (values) => {
    console.log('Success:', values);
    authUser(values);
  };
  const isLogin = useSelector(state => state.user.login);

  if (isLogin) {
    return <Redirect to="/dashboard" />;
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <AuthRoot>
      <AreaWrapper>
        <Area>
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
        </Area>
      </AreaWrapper>
      <Container>
        <StyledLogo />
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите Логин!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Логин" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите Пароль!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Пароль"
            />
          </Form.Item>
          <Form.Item>
          <Checkbox>Запомнить</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Войти
            </Button>
            Или
            {' '}
            <a href="" style={{ pointerEvents: 'none', opacity: '0.5' }}>Зарегистрироваться</a>
          </Form.Item>
        </Form>
      </Container>
    </AuthRoot>
  );
}

export default React.memo(Auth);
