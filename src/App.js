import React from 'react';
import ROUTES, {RenderRoutes} from './routes/Index';

function App() {
  return (
    <RenderRoutes routes={ROUTES} />
  );
}

export default App;
