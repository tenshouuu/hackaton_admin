import React, { useState } from 'react';
import { Table, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { ResumesRoot, Filters, StyledButton } from './styled';
import { columns, data } from './helpers';

const { Search } = Input;

function Resumes() {
  const [{ bottom }] = useState({
    top: 'topLeft',
    bottom: 'bottomRight',
  });
  return (
    <ResumesRoot>
      <Filters>
        <Search
          placeholder="input search text"
          onSearch={(value) => console.log(value)}
          style={{ width: 200 }}
        />
        <StyledButton type="primary">
            <PlusOutlined />
            <span>Add resume</span>
        </StyledButton>
      </Filters>
      <Table
        columns={columns}
        pagination
        dataSource={data}
      />
    </ResumesRoot>
  );
}

export default React.memo(Resumes);
