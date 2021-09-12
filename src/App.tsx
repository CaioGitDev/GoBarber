import React from 'react';
import AppProvider from './hooks';
import SigIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SigIn />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
