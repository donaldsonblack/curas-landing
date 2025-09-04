import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import BubbleMenu from './components/ui/BubbleMenu';

function App() {
  const [isIntroAnimationDone, setIntroAnimationDone] = useState(false);

  const handleIntroAnimationComplete = () => {
    setIntroAnimationDone(true);
  };

  return (
    <div>
      {isIntroAnimationDone && <BubbleMenu logo="./vite.svg" useFixedPosition />}
      <Routes>
        <Route index element={<Home onAnimationComplete={handleIntroAnimationComplete} />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
