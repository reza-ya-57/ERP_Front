import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import { privateRoutes } from './routes/routes';
import { AxiosInterceptor } from './app/axios/AxiosInterceptor';

function App() {
  window.onbeforeunload = () => {
    console.log('reload');
  };
  return (
    <BrowserRouter>
      <AxiosInterceptor>
        <React.Suspense fallback={<div>loading...</div>}>
          <Routes>
            {privateRoutes.map(({ path, Component }) => {
              return <Route key={path} path={path} element={<Component />} />;
            })}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </React.Suspense>
      </AxiosInterceptor>
    </BrowserRouter>
  );
}

export default App;
