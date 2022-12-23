import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import { privateRoutes, PublicRoutes } from './routes/routes';
import { AxiosInterceptor } from './app/axios/AxiosInterceptor';
import { PrivateRoute } from './app/components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <AxiosInterceptor>
        <React.Suspense fallback={<div>loading...</div>}>
          <Routes>
            <Route>
              {PublicRoutes.map(({ path, Component }) => {
                return <Route key={path} path={path} element={<Component />} />;
              })}
            </Route>
            <Route>
              {privateRoutes.map(({ path, Component }) => {
                return <Route key={path} path={path} element={<PrivateRoute><Component /></PrivateRoute>} />;
              })}
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </React.Suspense>
      </AxiosInterceptor>
    </BrowserRouter>
  );
}

export default App;
