const GroupComponent = () => {
  return (
    <header className="absolute top-[0rem] left-[0rem] w-full flex flex-row items-start justify-start max-w-full z-[1] text-left text-[1.125rem] text-greyscale-disabled font-body-text-body-m-regular">
      <div className="flex-1 flex flex-row items-start justify-start py-[0.563rem] px-[8.938rem] box-border relative gap-[4.188rem] max-w-full">
        <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-corporate-black" />
        <div className="h-[7.625rem] w-[6.313rem] relative overflow-hidden shrink-0 hidden z-[1]" />
        <div className="flex flex-row items-end justify-start [row-gap:20px] max-w-full mq1150:flex-wrap">
          <div className="flex flex-col items-start justify-start py-[0rem] pr-[1.281rem] pl-[0rem]">
            <img
              className="w-[6.313rem] h-[6.5rem] relative object-cover z-[2]"
              alt=""
              src="/clip-path-group@2x.png"
            />
          </div>
          <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1.75rem]">
            <div className="flex flex-row items-start justify-start [row-gap:20px] mq800:flex-wrap">
              <div className="flex flex-row items-start justify-start py-[0.625rem] px-[0.938rem] z-[2]">
                <div className="relative leading-[1.5rem] inline-block min-w-[6.188rem] whitespace-nowrap">
                  Presence +
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-[0.625rem] px-[0.938rem] z-[1] ml-[-0.094rem] mq450:ml-0">
                <div className="relative leading-[1.5rem] inline-block min-w-[3.563rem] whitespace-nowrap">
                  Core +
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1.75rem] box-border max-w-full">
            <div className="flex flex-row items-start justify-start [row-gap:20px] mq800:flex-wrap">
              <div className="flex flex-row items-start justify-start py-[0.625rem] px-[0.938rem] z-[1]">
                <div className="relative leading-[1.5rem] whitespace-nowrap">
                  Digital Reality +
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-[0.625rem] px-[0.938rem] z-[1]">
                <div className="relative leading-[1.5rem] inline-block min-w-[4.313rem] whitespace-nowrap">
                  Invest +
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-[0.625rem] px-[0.938rem] z-[1]">
                <div className="relative leading-[1.5rem] inline-block min-w-[2.563rem]">
                  Map
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-[0.625rem] px-[0.938rem] z-[1]">
                <div className="relative leading-[1.5rem] inline-block min-w-[2.813rem]">
                  Buzz
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-[0.625rem] px-[0.938rem] z-[1]">
                <div className="relative leading-[1.5rem] inline-block min-w-[4.125rem] whitespace-nowrap">
                  Trade +
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[1.75rem] px-[0rem] pb-[0rem] text-center">
          <div className="flex flex-row items-start justify-start gap-[1.625rem]">
            <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0 z-[1]"
                alt=""
                src="/search.svg"
              />
            </div>
            <div className="flex flex-row items-start justify-start z-[1]">
              <div className="rounded-11xl flex flex-row items-start justify-start py-[0.625rem] px-[3.188rem] gap-[0.5rem] border-[1px] border-solid border-greyscale-disabled">
                <img
                  className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icon-button.svg"
                />
                <div className="w-[3.938rem] relative leading-[1.5rem] inline-block min-w-[3.938rem] whitespace-nowrap">
                  Sign In
                </div>
                <img
                  className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icon-button.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default GroupComponent;