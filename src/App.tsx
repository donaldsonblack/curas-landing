import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import BubbleMenu from './components/ui/BubbleMenu';
import IntroAnimation from './components/ui/introAnimation';

function App() {
  const [isIntroAnimationDone, setIntroAnimationDone] = useState(
    () => sessionStorage.getItem('introAnimationPlayed') === 'true'
  );

  const handleIntroAnimationComplete = () => {
    sessionStorage.setItem('introAnimationPlayed', 'true');
    setIntroAnimationDone(true);
  };

  if (!isIntroAnimationDone) {
    return <IntroAnimation onAnimationComplete={handleIntroAnimationComplete} />;
  }

  return (
    <div>
      <BubbleMenu logo="./vite.svg" useFixedPosition />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
