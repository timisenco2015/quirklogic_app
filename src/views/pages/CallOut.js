import React from 'react';
import styled from 'styled-components';
import { Button,Checkbox, Typography } from 'antd';
import { colours } from '../styles/colours';

const { Title, Text } = Typography;


const StyledText = styled(Text)`
  font-size: 18px;
`;

const CallOut = ({ image, title, semiBoldTitle, paragraph, btn, checkbox }) => (
  <SpaceWrapper direction="vertical">
    {image ? <img src={image} alt="placeholder" /> : null}
    <Typography>
      <Title style={{ fontWeight: `${semiBoldTitle}` }}>{title}</Title>
      <StyledText style={{ fontSize: '18px', color: `${colours.charcoal.c8}` }}>{paragraph}</StyledText>
    </Typography>
    {checkbox ? <Checkbox onChange={checkbox.onChange}>{checkbox.label}</Checkbox> : null}
    {btn ? <Button type="primary" shape="round" label={btn.label} onClick={btn.onClick} /> : null}
  </SpaceWrapper>
);

const SpaceWrapper = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 750px;
  line-height: 32px;
  > * {
    margin-bottom: 1.5em;
  }
  img {
    max-width: 150px;
  }
  h1 {
    font-weight: 700;
    text-align: center !important;
  }

  @media (max-width: 600px) {
    line-height: 24px;
    h1 {
      font-weight: 700;
      text-align: center !important;
    }
    .ant-space-item .ant-typography {
    }
    span {
      font-size: 16px !important;
    }
    img {
      max-width: 100px;
    }
  }
`;



export default CallOut;
