import { BrowserRouter, useLocation } from 'react-router-dom';
import './css/components/App.scss';
import AnimationRoutes from './routes/AnimationRoutes';
import { AnimatePresence } from 'framer-motion';

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
    <AnimatePresence>
      <AnimationRoutes location={location} />
    </AnimatePresence>
  );
}

export default App;
