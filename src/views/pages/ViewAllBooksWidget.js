import React, { useEffect,useState} from 'react';
import { ReloadOutlined,DeleteTwoTone } from '@ant-design/icons';
import GlobalModal from './GlobalModal';
import ErrorPage from './ErrorPage';
import {colours} from '../styles/colours';
import useMediaSize from '../../utils/hooks/useMediaSize';
import SearchInput from './SearchInput';
import { getAllBooks,resetSavedCatalogBook,deleteSpecificBook } from '../../state/ducks/books/actions';
import { useDispatch, useSelector } from 'react-redux';
import ApiRequest from '../../middlewares/ApiRequest';
import { Table, Spin,Empty,message } from 'antd';
import styled from 'styled-components';

const ViewAllBooksWidget = ()=>{
    const mediaSize = useMediaSize();
    const [transformedBookList, setTransformedBookList] = useState([])
    const allCatalogBooksList = useSelector((state) => state.books.allCatalogBooks);
    const isAllCatalogBooksInternalError = useSelector((state) => state.books.isAllCatalogBooksInternalError);
    const deleteCatalogBooksByBookId = useSelector((state) => state.books.deleteCatalogBooksByBookId);
    const [tableLoading, setTableLoading] = useState(false);
    const [showGlobalModal, setShowGlobalModal] = useState(false);
  
    ApiRequest.initialize();
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getAllBooks());
      dispatch(resetSavedCatalogBook());
      setTableLoading(true);
    }, []);
  
    useEffect(() => {
      if (allCatalogBooksList===null && isAllCatalogBooksInternalError) {
        setShowGlobalModal(true);
      }
    }, [isAllCatalogBooksInternalError]);
  
    useEffect(()=>{   
      if(allCatalogBooksList&&allCatalogBooksList!==null){
        getBooksList();
        setTableLoading(false);
    }
    },[allCatalogBooksList]);
  
    useEffect(()=>{
      if(deleteCatalogBooksByBookId&&deleteCatalogBooksByBookId!==null){
          if(deleteCatalogBooksByBookId.statusDesc==="succesful"){
            
            message.success(deleteCatalogBooksByBookId.message);
            dispatch(getAllBooks());
          }
          else{
            message.error(deleteCatalogBooksByBookId.message);
          }
        
      }
  },[deleteCatalogBooksByBookId])
  
    const onFilterBookListByKeyword =(events)=>{
      const result =allCatalogBooksList.filter(book =>book.keyword&&book.keyword.startsWith(events.target.value));
      setTransformedBookList(result);
    }
    const getBooksList=()=>{
  
      setTransformedBookList(allCatalogBooksList);
    }
    
    const columns = [
      {
        title: '',
        key: '26',
        width: '2px',
        fixed:'left',
      },
      
      {
        title: 'Book Name',
        dataIndex: 'name',
        align: 'center',
        key: 'name',
        width: '150px',
        
      },
      {
        title: 'Book Author',
        dataIndex: 'author',
        width: '150px',
        align: 'center',
        key: 'author',
      },
      {
        title: 'Keyword',
        dataIndex: 'keyword',
        width: '150px',
        align: 'center',
        key: 'keyword',
      },
    {
      title: 'Delete',
      key: '27',
      align: 'center',
      width: '30px',
      fixed:'right',
      render: (text, record, index) => {
        return (
          <div style={{ textAlign: `center` }}>
            {<DeleteTwoTone
               onClick={()=>{dispatch(deleteSpecificBook(record.id))}} style={{  size:"14px", color:`${colours.charcoal.c5}`,alignSelf:'center'} }
              />
           }
          </div>
        );
      },
    }
    ];
    return   <>
    {tableLoading ? (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <Spin />
      </div>
    ) : (!transformedBookList?<Empty description={"No Data. Come Back Soon!"} style={{marginTop:'40px'}}/> :
      <>
      <div style={{display:'flex',flexDirection:'column',marginTop:'24px'}}>
  
      <div style={{display:'flex',flexDirection:'row',gap:'10px'}}>
        <SearchInput placeholder={"keyword search"} onChangeInput={onFilterBookListByKeyword} />
      <ReloadOutlined onClick={()=>{getBooksList()}} style={{  size:"14px", color:`${colours.charcoal.c5}`,alignSelf:'center'} }/></div>
       
      <StyledTable
        rowKey="id"
        maxwidth={mediaSize}
        columns={columns}
        dataSource={transformedBookList}
        scroll={{ x: 1920 }}
      />
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
    )}
  </>
  
  }


  const StyledTable = styled(Table)`
  .ant-table {
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
    margin-top: 12px;
    @media only screen and (max-width: 576px) {
      margin-top: 24px;
    }
    width:auto;
    min-width:100%;
    max-width: ${(props) => props.maxwidth + 'px'};
    color: ${colours.charcoal.c9};
  }
  .ant-table-thead > tr > th {
    font-size: 12px;
    font-weight: 600;
    font-style: normal;
    height: 46px;
    color: ${colours.charcoal.c10};
    background-color: ${colours.grey.g0};
    @media only screen and (min-width: 1440px) {
      height: 54px;
      font-size: 14px;
    }
  }

  .ant-table-thead > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td,
  .ant-table-tbody > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td,
  .ant-table-thead > tr:hover:not(.ant-table-expanded-row) > td,
  .ant-table-tbody > tr:hover:not(.ant-table-expanded-row) > td {
    background-color: ${colours.grey.g0};
  }

  .ant-table-tbody > tr > td {
    height: 46px;
    color: ${colours.charcoal.c9};
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
  }
`;



  export default ViewAllBooksWidget;