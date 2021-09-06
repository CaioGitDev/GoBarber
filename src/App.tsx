import React from 'react';
import { AuthProvider } from './context/AuthContext';
import SigIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SigIn />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
