import FrameComponent2 from "./framecomponent2";

const FrameComponent1 = () => {
  return (
    <div className="w-[62.5rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] text-center text-[1.875rem] text-grayscale-white font-body-text-body-m-regular mq1150:flex-wrap mq1150:justify-center">
      <FrameComponent2
        mISSION="MISSION"
        ourMissionAtVYUGIsToProvi="Our mission at VYUG is to provide a platform for immersive and interactive experiences across various industries and environments. We strive to create a dynamic and inclusive metaverse that empowers individuals and businesses to thrive in the digital age."
      />
      <FrameComponent2
        mISSION="VISION"
        ourMissionAtVYUGIsToProvi="At VYUG, our vision is to create a seamless blend of the physical and virtual worlds, enriching lives and expanding possibilities. We envision a world where people can explore, create, and connect in ways never before imagined, transcending the limitations of time and space."
        propPadding="6.25rem 2.875rem 2.438rem 2.688rem"
        propGap="0.875rem"
        propPadding1="0rem 0rem 0rem 0.063rem"
        propWidth="6.75rem"
      />
    </div>
  );
};

export default FrameComponent1;