import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Form, Input, Button, Checkbox,
} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {
  AuthRoot, Container, StyledLogo, Area, AreaWrapper, Block,
} from './styled';

function Auth() {
  const history = useHistory();
  const onFinish = (values) => {
    console.log('Success:', values);
    history.push('/dashboard');
  };

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
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or
            {' '}
            <a href="">register now!</a>
          </Form.Item>
        </Form>
      </Container>
    </AuthRoot>
  );
}

export default React.memo(Auth);
