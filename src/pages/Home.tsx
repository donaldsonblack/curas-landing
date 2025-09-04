
import IntroAnimation from "../components/ui/introAnimation";
import TextAnimation from "../components/ui/textAnimation"; 

export default function Home({ onAnimationComplete }: { onAnimationComplete: () => void }) {
    return (
        <IntroAnimation onAnimationComplete={onAnimationComplete}>
           <TextAnimation />
        </IntroAnimation>
    );
}
