import React, { useState, useCallback, useEffect } from 'react';
import { Input, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { fetchGetResumes } from 'api';
import {
  ResumesRoot,
  Filters,
  StyledButton,
  StyledTable,
  Container,
  StyledSearch,
} from './styled';
import { columns } from './helpers';

function Resumes() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [{ bottom }] = useState({
    top: 'topLeft',
    bottom: 'bottomRight',
  });
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 10,
  });
  const [loading, setLoading] = useState(false);

  const handleFetchData = useCallback((currentPagination) => {
    setLoading(true);
    fetchGetResumes({
      offset: currentPagination.current,
      limit: currentPagination.limit,
    })
      .catch((e) => {
        setLoading(false);
        message.error('Something went wrong... Try to reload page');
      })
      .then((resp) => {
        const respData = resp.data;
        setLoading(false);
        if (respData) {
          if (respData.resumes) {
            setData(respData.resumes);
          }

          setPagination({
            current: respData.offset,
            limit: respData.limit,
            total: respData.total,
          });
        }
      });
  }, []);

  useEffect(() => {
    handleFetchData(pagination);
  }, [])

  const handleTableChange = useCallback((pagination, filters, sorter) => {
    handleFetchData(pagination);
  }, [handleFetchData]);

  console.log(data);

  return (
    <ResumesRoot>
      <Filters>
        <StyledSearch
          placeholder="имя"
          onSearch={(value) => console.log(value)}
        />
        <StyledButton type="primary">
          <PlusOutlined />
          <span>Загрузить резюме</span>
        </StyledButton>
      </Filters>
      <Container>
      <StyledTable
        rowKey={(record) => record.id}
        rowSelection={{
          selectedRowKeys,
          onChange: setSelectedRowKeys,
        }}
        loading={loading}
        columns={columns}
        pagination={pagination}
        dataSource={data}
        onChange={handleTableChange}
      />
      </Container>
    </ResumesRoot>
  );
}

export default React.memo(Resumes);
