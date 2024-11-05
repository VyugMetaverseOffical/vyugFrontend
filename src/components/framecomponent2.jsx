import { useMemo } from "react";

const FrameComponent2 = ({
  mISSION,
  ourMissionAtVYUGIsToProvi,
  propPadding,
  propGap,
  propPadding1,
  propWidth,
}) => {
  const statementBoxStyle = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const mISSIONStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="w-[27.5rem] rounded-21xl bg-corporate-black flex flex-col items-end justify-start pt-[6.688rem] pb-[1.875rem] pr-[2.813rem] pl-[2.75rem] box-border gap-[1rem] max-w-full z-[1] text-center text-[1.875rem] text-grayscale-white font-body-text-body-m-regular mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq800:pt-[4.375rem] mq800:pb-[1.25rem] mq800:box-border"
      style={statementBoxStyle}
    >
      <div className="w-[27.5rem] h-[34rem] relative rounded-21xl bg-corporate-black hidden max-w-full" />
      <div
        className="self-stretch h-[2.25rem] flex flex-row items-start justify-center py-[0rem] pr-[0rem] pl-[0.125rem] box-border"
        style={frameDivStyle}
      >
        <h2
          className="m-0 self-stretch w-[8.438rem] relative text-inherit leading-[120%] font-medium font-inherit flex items-center justify-center z-[2] mq450:text-[1.125rem] mq450:leading-[1.375rem] mq800:text-[1.5rem] mq800:leading-[1.813rem]"
          style={mISSIONStyle}
        >
          {mISSION}
        </h2>
      </div>
      <div className="self-stretch h-[22.188rem] relative text-[1.375rem] leading-[144%] flex items-center justify-center shrink-0 z-[2] mq450:text-[1.125rem] mq450:leading-[1.563rem]">
        {ourMissionAtVYUGIsToProvi}
      </div>
    </div>
  );
};
export default FrameComponent2;