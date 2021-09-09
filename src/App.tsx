import React from 'react';
import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './hooks/AuthContext';
import SigIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SigIn />
    </AuthProvider>

    <ToastContainer />
    <GlobalStyle />
  </>
);

export default App;
