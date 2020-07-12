import React from 'react';
import { Result, Button } from 'antd';

function Error() {
  return (
    <Result
      status="404"
      title="Что то пошло не так"
      subTitle="Попробуйте обновить страницу"
      extra={<Button type="primary">Обновить</Button>}
    />
  );
}

export default React.memo(Error);
