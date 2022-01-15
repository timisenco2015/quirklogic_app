import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveBooks } from '../../../state/ducks/books/actions';
import {
  Form,
  Input,
  Button,
  message
} from 'antd';
import GlobalModal from '../globalModal/GlobalModal';
import ErrorPage from '../error/ErrorPage';


  const AddBookWidget = () => {
  const [form] = Form.useForm();
  const savedCatalogBook = useSelector((state) => state.books.savedCatalogBook);
  const  isSavedCatalogBookInternalError = useSelector((state) => state.books.isSavedCatalogBookInternalError);
  const [componentSize, setComponentSize] = useState('default');
  const [showGlobalModal, setShowGlobalModal] = useState(false);
  const dispatch = useDispatch();

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const onFinish = (values) => {
    dispatch(saveBooks({bookName:values.bookName,bookAuthor:values.bookAuthor,searchKeyword:values.keyword}));
    console.log('Finish:', values);
  };

  useEffect(() => {
    if (savedCatalogBook===null && isSavedCatalogBookInternalError) {
      setShowGlobalModal(true);
    }
  }, [isSavedCatalogBookInternalError]);

  useEffect(()=>{
      if(savedCatalogBook&&savedCatalogBook!==null){
          if(savedCatalogBook.statusDesc==="succesful"){
            message.success(savedCatalogBook.message);
            form.resetFields();
          }
          else{
            message.error(savedCatalogBook.message);
          }
        
      }
  },[savedCatalogBook])

  return <>
      <div style={{marginTop:'20px'}}>
    <Form
    form={form}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onFinish={onFinish}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    > 
      <Form.Item label="Book Name"
      name="bookName"
       rules={[
        {
            required: true,
            message: "Book name is required!",
        },
      ]} >
        <Input />
      </Form.Item>
      <Form.Item label="Book Author"
      name="bookAuthor"
       rules={[
        {
            required: true,
            message: "Book Author is required!",
        },
      ]}>
        <Input />
      </Form.Item>
      <Form.Item label="Keyword"
      name="keyword"
       rules={[
        {
            required: true,
            message: "Keyword is required!",
        },
      ]}>
        <Input />
      </Form.Item>
      <Form.Item label=""  style={{display:'flex',flexDirection:'column',alignItems:'center',}}>
        <Button htmlType="submit" type="primary">Save</Button>
      </Form.Item>
    </Form>
    </div>
    <GlobalModal
          showGlobalModal={showGlobalModal}
          btn={true}
          handleCloseGlobalModal={() => {
            setShowGlobalModal(false);
          }}
        >
          <ErrorPage />
        </GlobalModal>
  </>
};


export default AddBookWidget;