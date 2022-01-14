import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { colours } from '../styles/colours';
const SearchInput = ({ placeholder, onChangeInput }) => {
  return (
    <StyleInput
      onChange={(event) => {
        onChangeInput(event)
      }}
      placeholder={placeholder ? `${placeholder}` : 'Business Search'}
      suffix={<SearchOutlined style={{  size:"14px", color:`${colours.charcoal.c5}`} } />}
    />
  );
};

const StyleInput = styled(Input)`
  width: 300px;
  box-sizing: border-box;
  border: 1px solid ${colours.grey.g3};
  height: 34px;
    border:none
  &.ant-input-affix-wrapper:hover {
    border-right-width: 1px !important;
  }
`;

export default SearchInput;