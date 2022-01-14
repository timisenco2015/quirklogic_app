import React from 'react';
import styled from 'styled-components';
import CallOut from '../pages/CallOut';
import { colours } from '../styles/colours';
import { QuestionCircleFilled } from '@ant-design/icons';
const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  max-width: 600px;
  & div {
    margin-top: 10px;
  }
`;
const CenterContentWrapper = styled.div`
  text-align: center;
`;

const ErrorPage = (props) => {
  return (
    <>
      <ContentWrapper>
        <QuestionCircleFilled style={{ fontSize: '60px', color: `${colours.purple.p10}` }} />
        <div>
          <CallOut
            image={null}
            title={'Oops! That was unexpected.'}
            paragraph={'Our team has been notified and we are working to fix the error.'}
            semiBoldTitle={600}
          />
          <CenterContentWrapper>
            <h5>Please refresh the page or try again later.</h5>
          </CenterContentWrapper>
        </div>
      </ContentWrapper>
    </>
  );
};

export default ErrorPage;
