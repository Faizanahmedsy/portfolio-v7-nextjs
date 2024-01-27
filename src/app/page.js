import { UiWrapper } from "@/components/shared";
import { TracingBeam } from "@/components/shared/tracing-beams";

export default function Home() {
  return (
    <UiWrapper>
      <div className="flex flex-col justify-center  items-center h-[690px]">
        <h1 className="font-bold text-center text-5xl animate-fade-in [--ani-delay:200ms] opacity-0 translate-y-[-1rem]">
          Hi I am Faizanahmed
        </h1>
      </div>
    </UiWrapper>
  );
}
