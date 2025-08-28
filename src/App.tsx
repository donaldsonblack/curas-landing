import { CalendarIcon, FileTextIcon, InputIcon } from "@radix-ui/react-icons";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { Marquee } from "@/components/magicui/marquee";
import { ShineBorder } from "@/components/magicui/shine-border";
import { cn } from "@/lib/utils";

const features = [
  {
    Icon: FileTextIcon,
    name: "Automated Reporting",
    description: "Generate detailed maintenance reports automatically.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Simplified Work Orders",
    description: "Create and manage work orders with ease.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: CalendarIcon,
    name: "Scheduled Maintenance",
    description: "Plan and track preventive maintenance schedules.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: FileTextIcon,
    name: "Asset Management",
    description: "Keep track of all your assets in one place.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: InputIcon,
    name: "Inventory Control",
    description: "Manage spare parts and inventory levels.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4",
  },
];

const logos = [
  "Acme Corp",
  "Stark Industries",
  "Wayne Enterprises",
  "Ollivander's Wand Shop",
  "Gekko & Co",
  "Cyberdyne Systems",
];

const SocialProof = () => (
  <div className="relative mt-20 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl">
    <p className="mb-10 text-lg text-muted-foreground">Trusted by the best</p>
    <Marquee pauseOnHover className="[--duration:20s]">
      {logos.map((logo) => (
        <div key={logo} className="px-10 text-xl font-semibold text-foreground">
          {logo}
        </div>
      ))}
    </Marquee>
  </div>
);

const CallToAction = () => (
  <div className="relative mt-20 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl">
    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
      Ready to get started?
    </h2>
    <p className="mt-4 text-lg leading-8 text-muted-foreground">
      Request a demo and see how Curas can transform your maintenance operations.
    </p>
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <ShineBorder
        className="text-center text-xl font-bold capitalize"
        shineColor={["#A07CFE", "#FE8A71", "#FFC947"]}
      >
        <button className="px-6 py-3">Request a Demo</button>
      </ShineBorder>
    </div>
  </div>
);

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]",
        )}
      />
      <div className="container mx-auto px-4 py-20 text-center">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Introducing Curas</span>
          </AnimatedShinyText>
        </div>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Maintenance Software for the Modern Age
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Curas is a modern maintenance software that helps you manage your assets,
          work orders, and preventive maintenance schedules with ease.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <BentoGrid className="lg:grid-rows-3">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>

      <div className="container mx-auto px-4 py-20">
        <SocialProof />
        <CallToAction />
      </div>
    </div>
  );
}

export default App;
