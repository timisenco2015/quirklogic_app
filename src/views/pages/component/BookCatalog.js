import React, {useState} from 'react';
import '../../styles/App.css';
import {Switch} from 'antd';
import _ from 'lodash';
import styled from 'styled-components';
import AddBookWidget from './AddBookWidget';
import ViewAllBooksWidget from './ViewAllBooksWidget'
import 'antd/dist/antd.css';


const BookCatalog=()=> {

  const [switchView, setSwitchView]=useState("Book Table View");
  const [disabled, setDisabled] = React.useState(true);
  const toggle = () => {
    if(disabled){
      setSwitchView("Add book View");
      
    }else{
      setSwitchView("Book Table View");
    }
    setDisabled(!disabled);
  };

  return (
    <><div style={{display:'flex',flexDirection:'column',gap:'10px',margin:'24px'}} data-test="component-bookcatalog">
      <SwitchContainer>
     <Switch size="large" checked={disabled} onClick={toggle} data-set="component-bookcatalog-button-toggle"/>
     <ViewText>{switchView} </ViewText>
      </SwitchContainer>
      
      {disabled?<ViewAllBooksWidget data-test="component-bookcatalog-viewbookwidget"/>:<AddBookWidget data-test="component-bookcatalog-addbookwidget"/>}
      </div>
    </>
  );
}

const SwitchContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:5px;
`

const ViewText = styled.div`
`

export default BookCatalog;
