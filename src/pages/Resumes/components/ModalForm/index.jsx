import React from 'react';
import {
  Form, Input, InputNumber, Button, message,
} from 'antd';

import { fetchAddResume } from 'api';
import { ModalFormRoot, StyledForm, Container } from './styled';

const validateMessages = {
  required: 'Поле обязательно!',
  types: {
    email: 'Неверно указана почта!',
  },
};

function ModalForm({ onClose }) {
  const [form] = Form.useForm();

  const onFinish = ({ resume }) => {
    if (resume) {
      console.log(resume);
      const values = Object.keys(resume).reduce((summator, key) => {
        if (resume[key]) {
          return {
            ...summator,
            [key]: resume[key],
          };
        }
        return summator;
      }, {});
      console.log(values);
      form.validateFields()
        .then(() => {
          return fetchAddResume(values)
        })
        .then(() => {
          onClose()
        })
        .catch((e) => message.error(e.message));
    }
  };
  return (
    <ModalFormRoot>
      <StyledForm
        form={form}
        layout="vertical"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item name={['resume', 'name']} label="Имя" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['resume', 'specialty']} label="Профессия">
          <Input />
        </Form.Item>
        <Form.Item name={['resume', 'email']} label="Почта" rules={[{ type: 'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['resume', 'hh_link']} label="HeadHunter">
          <Input />
        </Form.Item>
        <Form.Item name={['resume', 'linkedin_link']} label="Linkedin">
          <Input />
        </Form.Item>
        <Container>
          <Form.Item name={['resume', 'min_salary']} label="Минимальная Зарплата" rules={[{ type: 'number', min: 1, max: 1000000 }]}>
            <InputNumber />
          </Form.Item>
          <Form.Item name={['resume', 'max_salary']} label="Максимальная Зарплата" rules={[{ type: 'number', min: 1, max: 1000000 }]}>
            <InputNumber />
          </Form.Item>
        </Container>
        <Form.Item name={['resume', '']} label="Подробное описание">
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Добавить
          </Button>
        </Form.Item>
      </StyledForm>
    </ModalFormRoot>
  );
}

export default React.memo(ModalForm);
