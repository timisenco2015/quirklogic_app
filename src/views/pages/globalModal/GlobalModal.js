import React, { useState } from 'react';
import styled from 'styled-components';
import {Button, Modal } from 'antd';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
  padding: 24px;
  margin-bottom: 30px;
`;

const GlobalModal = ({ showGlobalModal, children, btn, handleCloseGlobalModal }) => {
  
  return (
    <Modal
      title=""
      visible={showGlobalModal}
      onOk={null}
      onCancel={null}
      mask={true}
      footer={null}
      width={1900}
      maskClosable={false}
      closable={false}
      closeIcon={null}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '24px 24px 60px',
        fontStyle: 'normal',
        fontWeight: 'normal',
      }}
    >
      <Wrapper data-test="data-test=component-globalmodal">
        {children}
        {btn && (
          <Button
            style={GlobalModal.Constants.SUBMITANSWER.STYLE}
            type="link"
            onClick={handleCloseGlobalModal}
            label="Cancel"
            data-test="data-test=component-globalmodal-button"
          />
        )}
      </Wrapper>
    </Modal>
  );
};

GlobalModal.Constants = {
  SUBMITANSWER: {
    STYLE: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '18px 32px',
      position: 'static',
      left: '0%',
      right: '0%',
      top: '0%',
      bottom: '0%',
      background: '#4F2683',
      borderRadius: '28px',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '14px',
      lineHeight: '152%',
      textAlign: 'center',
      fontFeatureSettings: 'cpsp on',
      color: '#FFFFFF',
      marginRight: '10px',
      marginTop: '30px',
    },
  },
};

export default GlobalModal;
