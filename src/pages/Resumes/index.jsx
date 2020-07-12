import React, { useState, useCallback, useEffect } from 'react';
import {Menu, message, Modal} from 'antd';
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
import { ModalForm } from './components';

function Resumes() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 10,
  });
  const [loading, setLoading] = useState(false);

  const handleOpenModal = useCallback(() => {
    setModalVisible(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  const handleFetchData = useCallback((currentPagination) => {
    setLoading(true);
    fetchGetResumes({
      offset: currentPagination.current - 1,
      limit: currentPagination.pageSize,
    })
      .catch((e) => {
        setLoading(false);
        message.error('Something went wrong... Try to reload page');
      })
      .then((resp) => {
        const respData = resp.data;
        setLoading(false);
        if (respData) {
          if (respData.results) {
            setData(respData.results);
          }

          setPagination({
            current: currentPagination.current,
            limit: currentPagination.pageSize,
            total: respData.count,
          });
        }
      });
  }, []);

  useEffect(() => {
    handleFetchData(pagination);
  }, []);

  const handleTableChange = useCallback((pagination, filters, sorter) => {
    handleFetchData(pagination);
  }, [handleFetchData]);

  const handleCloseModalForm = useCallback(() => {
    handleFetchData(pagination);
    handleCloseModal();
  }, [handleCloseModal, handleFetchData, pagination]);

  return (
    <ResumesRoot>
      <Filters>
        <StyledSearch
          placeholder="имя"
          onSearch={(value) => console.log(value)}
          style={{ pointerEvents: 'none', opacity: '0.5' }}
        />
        <StyledButton type="primary" onClick={handleOpenModal}>
          <PlusOutlined />
          <span>Добавить резюме</span>
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
      <Modal
        destroyOnClose
        visible={modalVisible}
        onOk={handleCloseModal}
        onCancel={handleCloseModal}
        footer={null}
      >
        <ModalForm onClose={handleCloseModalForm} />
      </Modal>
    </ResumesRoot>
  );
}

export default React.memo(Resumes);
