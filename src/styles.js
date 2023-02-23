import styled from 'styled-components';

export const Header = styled.header`
    padding-right: 3rem;
    padding-left: 3rem;
    padding: 1.5rem;
    align-items: center;
    border-bottom: 1px solid #dee2e6!important;
    display: flex;
    box-sizing: border-box;

    span{
      font-size: 1.25rem;
      font-family: Arial, Helvetica, sans-serif;
    }
`;

export const MainContainer = styled.div`
  padding-top: 3rem ;
  padding-bottom: 3rem ;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  display: flex;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
`;


export const LoginTitle = styled.h5`
  margin-bottom: 1.5rem;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.25rem;
`;

export const LoginContainer = styled.div`
  width: 430px;
  min-height: 400px;
  height: auto;
  padding-bottom: 1.5rem;
`;


export const InputText = styled.input`
  display: block;
  width: 100%;
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  margin: 1rem 0;
    
`;

export const LabelText = styled.label`
  margin-bottom: 3.5rem;
  font-family: Arial, Helvetica, sans-serif;

`;

export const ButtonDiv = styled.div`
  margin-bottom: 1.5rem!important;
  
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  div {
    display: flex!important;
    flex: 0 0 auto;
    width: 50%;
    justify-content: center!important;
  }

  button {
    color: #fff;
    background-color: #0d6efd;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    border-radius: .25rem;
    }

    a {
      text-decoration: none;
      color: #0d6efd;
      margin: .5rem!important;
    }
`;

export const ExtraDiv = styled(MainContainer)`
  padding: 0!important;
  flex-direction: row!important;
  flex-wrap: wrap!important;
  a {
    text-decoration: none;
    color: #0d6efd;
    margin: .5rem!important;
  }
`;
