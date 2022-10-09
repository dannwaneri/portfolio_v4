import React from "react";
import Layout from '../components/Layout'
import { 
  Wrapper,
  ErrorH1,
  StyledHeader,
  ErrorH2
}     from '../components/gatsby-error' 

const NotFoundPage = () => (
  <Layout>
 <Wrapper>
  <div>
  <ErrorH1>
  404
  </ErrorH1>
  <StyledHeader>
    <ErrorH2>
This page could not be found
    </ErrorH2>
  </StyledHeader>
  </div>
  </Wrapper>        
  </Layout>
)

export default NotFoundPage
