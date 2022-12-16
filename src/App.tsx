import React from 'react'
import { PublicRoutes } from './routes/routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
const CreateUser = React.lazy(() => import('./pages/UserManagement/CreateUser/CreateUser'))
const ViewUser = React.lazy(() => import('./pages/UserManagement/ViewUser/ViewUser'))
const Login = React.lazy(() => import('./pages/Login/Login'))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/login' element={<Login />} />
          <Route path='/create-user' element={<CreateUser />} />
          <Route path='/view-user' element={<ViewUser />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
