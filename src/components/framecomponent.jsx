const FrameComponent = () => {
  return (
    <div className="w-[30.813rem] !m-[0] absolute bottom-[14.313rem] left-[10.688rem] rounded-3xs box-border flex flex-row flex-wrap items-start justify-start pt-[0.563rem] pb-[0.625rem] pr-[0.875rem] pl-[1.625rem] gap-[1.75rem] max-w-full z-[2] text-left text-[1.125rem] text-black font-body-text-body-m-regular border-[1px] border-solid border-black">
      <div className="h-[4.438rem] w-[30.813rem] relative rounded-3xs box-border hidden max-w-full border-[1px] border-solid border-black" />
      <div className="flex-1 flex flex-col items-start justify-start pt-[0.813rem] px-[0rem] pb-[0rem] box-border min-w-[10.375rem]">
        <div className="self-stretch h-[1.5rem] relative leading-[132%] inline-block whitespace-nowrap z-[3]">
          XYZ@GMAIL.COM
        </div>
      </div>
      <div className="h-[3rem] w-[10.5rem] flex flex-row items-start justify-start z-[3] text-center text-grayscale-white">
        <div className="ml-[-0.406rem] self-stretch w-[11.313rem] rounded-11xl bg-greyscale-black flex flex-row items-start justify-start py-[0.75rem] px-[3.25rem] box-border gap-[0.5rem] shrink-0 [debug_commit:1de1738]">
          <img
            className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/icon-button.svg"
          />
          <div className="self-stretch flex-1 relative leading-[132%] whitespace-nowrap">
            SIGN UP
          </div>
          <img
            className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/icon-button.svg"
          />
        </div>
      </div>
    </div>
  );
};
export default FrameComponent;