import { UiWrapper } from "@/components/shared";

export default function Home() {
  return (
    <>
      <UiWrapper>
        <div className="flex flex-col justify-evenly  items-center h-[690px]">
          <h1 className="font-bold text-center text-5xl ">
            Hi I am Faizanahmed
          </h1>

          <div className="grid grid-cols-3">
            <div className="col-span-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              unde tempora officia necessitatibus quidem vitae voluptatibus
              neque aperiam. Facere, quo nostrum? Repellat vero porro provident.
              Voluptatum earum modi doloremque maiores consectetur! Quos quo
              pariatur provident similique odit aliquam ab ad necessitatibus,
              totam non eius molestias dolorum beatae excepturi ullam magnam.
            </div>

            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              unde tempora officia necessitatibus quidem vitae voluptatibus
              neque aperiam. Facere, quo nostrum? Repellat vero porro provident.
              Voluptatum earum modi doloremque maiores consectetur! Quos quo
              pariatur provident similique odit aliquam ab ad necessitatibus,
              totam non eius molestias dolorum beatae excepturi ullam magnam.
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </UiWrapper>
    </>
  );
}
