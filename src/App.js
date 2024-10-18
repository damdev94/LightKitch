import React from 'react';
import { BrowserRouter, useLocation} from 'react-router-dom';
import './css/components/App.scss';
import AnimationRoutes from './routes/AnimationRoutes';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';

export

function App() {

  return (
    <BrowserRouter>
      <AnimatedApp />
    </BrowserRouter>
  );
}

function AnimatedApp() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <AnimationRoutes location={location} key={location.pathname}/>
      </AnimatePresence>
    </>

  );
}

export default App;
