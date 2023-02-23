import { LoginTitle, LoginContainer, InputText, LabelText,MainContainer, ButtonDiv,ExtraDiv, Header } from './styles'

function App() {
  return (
    <div>
      <Header>
        <span>OCR + TRADUTOR</span>
      </Header>
      <MainContainer>
        <LoginTitle>ENTRAR</LoginTitle>

        <LoginContainer>
          <LabelText>Nome de usuario</LabelText>
          <InputText></InputText>
          <LabelText>Senha</LabelText>
          <InputText></InputText>

        <ButtonDiv>
          <div><button>Entrar</button></div>
          <div><a href="#">Cancelar</a></div>
        </ButtonDiv>
        
        <ExtraDiv>
            <p>Não está cadastrado? </p> <a href="#">Cadastre-se aqui!</a>
        </ExtraDiv>
        
        </LoginContainer>
        
      </MainContainer>
    </div>
    
  );
}

export default App;
