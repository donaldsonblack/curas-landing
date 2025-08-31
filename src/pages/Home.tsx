import BubbleMenu from '../components/ui/BubbleMenu'
import ScrollStack, { ScrollStackItem } from '../components/ui/ScrollStack'
import DotGrid from '../components/ui/DotGrid';
import { Globe } from '../components/magicui/globe';

const items = [
    {
        label: 'home',
        href: '#',
        ariaLabel: 'Home',
        rotation: -8,
        hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
    },
    {
        label: 'about',
        href: '#',
        ariaLabel: 'About',
        rotation: 8,
        hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
    },
    {
        label: 'projects',
        href: '#',
        ariaLabel: 'Projects',
        rotation: 8,
        hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
    },
    {
        label: 'blog',
        href: '#',
        ariaLabel: 'Blog',
        rotation: 8,
        hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
    },
    {
        label: 'contact',
        href: '#',
        ariaLabel: 'Contact',
        rotation: -8,
        hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
    }
];

export default function Home() {
    return (
        <>
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                <DotGrid
                    dotSize={10}
                    gap={30}
                    baseColor="#F2F0EF"
                    activeColor="#fff"
                    proximity={120}
                    shockRadius={250}
                    shockStrength={5}
                    resistance={240}
                    returnDuration={1.5}
                />
            </div>
            <div style={{ height: '20vh' }}>
                <Globe /> 
            </div>

            <BubbleMenu
                logo={<span style={{ fontWeight: 700 }}>RB</span>}
                items={items}
                menuAriaLabel="Toggle navigation"
                menuBg="#ffffff"
                menuContentColor="#111111"
                useFixedPosition={true}
                animationEase="back.out(1.5)"
                animationDuration={0.5}
                staggerDelay={0.12}
            />

            <div style={{ height: '100vh' }}>
                <ScrollStack itemDistance={580} itemStackDistance={25} >
                    <ScrollStackItem>
                        <h2>Card 1</h2>
                        <p>This is the first card in the stack</p>
                    </ScrollStackItem>
                    <ScrollStackItem>
                        <h2>Card 2</h2>
                        <p>This is the second card in the stack</p>
                    </ScrollStackItem>
                    <ScrollStackItem>
                        <h2>Card 3</h2>
                        <p>This is the third card in the stack</p>
                    </ScrollStackItem>
                </ScrollStack> 
            </div>
        </>
    );
}
