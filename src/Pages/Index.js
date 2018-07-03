import React from 'react';
import Main from '../UI/Main/Main';
import BelowMain from '../UI/BelowMain/BelowMain';
import MonkeyHang from '../UI/SvgAnim/MonkeyHang/MonkeyHang';
import Wrapper from '../Hoc/Wrapper'

const Index = (props)=>{

    return (
          <Wrapper>
          <Main/>
          <MonkeyHang/>
          <BelowMain/>
          </Wrapper>
    )
} 

export default Index;