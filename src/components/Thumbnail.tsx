import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";

export type ThumbnailType = {
  className?: string;
  bG?: string;
  dots?: string;
  arrows?: string;
  tabs?: string;
  combinedShape?: string;
  page1?: string;
  share?: string;
  sites?: string;
  newPage?: string;
  bG1?: string;

  /** Style props */
  shareIconAlignSelf?: CSSProperties["alignSelf"];
  shareIconFlex?: CSSProperties["flex"];
  shareIconMinWidth?: CSSProperties["minWidth"];
  sitesIconBackgroundColor?: CSSProperties["backgroundColor"];
  newPageIconBackgroundColor?: CSSProperties["backgroundColor"];
  propAlignSelf?: CSSProperties["alignSelf"];

  /** Action props */
  onThumbnail1ContainerClick?: () => void;
};

const Thumbnail: FunctionComponent<ThumbnailType> = ({
  className = "",
  bG,
  dots,
  arrows,
  tabs,
  combinedShape,
  page1,
  share,
  sites,
  newPage,
  bG1,
  shareIconAlignSelf,
  shareIconFlex,
  shareIconMinWidth,
  sitesIconBackgroundColor,
  newPageIconBackgroundColor,
  propAlignSelf,
  onThumbnail1ContainerClick,
}) => {
  const thumbnail1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: shareIconAlignSelf,
      flex: shareIconFlex,
      minWidth: shareIconMinWidth,
    };
  }, [shareIconAlignSelf, shareIconFlex, shareIconMinWidth]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: sitesIconBackgroundColor,
    };
  }, [sitesIconBackgroundColor]);

  const backgroundStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: newPageIconBackgroundColor,
    };
  }, [newPageIconBackgroundColor]);

  const projectNameStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const onThumbnail1ContainerClick1 = useCallback(() => {
    // Please sync "Project #1" to the project
  }, []);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-6 max-w-full cursor-pointer text-center text-8xs text-dimgray font-inter ${className}`}
      onClick={onThumbnail1ContainerClick}
      style={thumbnail1Style}
    >
      <div
        className="self-stretch bg-lavender flex flex-col items-center justify-start pt-11 px-5 pb-14 box-border max-w-full mq450:pt-[29px] mq450:pb-9 mq450:box-border"
        style={frameDivStyle}
      >
        <div
          className="w-[680px] h-[410px] relative bg-lavender hidden max-w-full z-[1]"
          style={backgroundStyle}
        />
        <div className="w-[512px] bg-gainsboro flex flex-row items-start justify-between pt-[2.8px] pb-px pl-1.5 pr-0.5 box-border gap-5 max-w-full z-[2] mq750:flex-wrap">
          <img
            className="h-[13.6px] w-[512px] relative hidden max-w-full"
            alt=""
            src={bG}
          />
          <div className="flex flex-row items-start justify-start gap-[4.3px]">
            <div className="flex flex-col items-start justify-start pt-[2.3px] px-0 pb-0">
              <img
                className="w-[22.1px] h-[4.7px] relative z-[1]"
                alt=""
                src={dots}
              />
            </div>
            <img
              className="self-stretch w-[22.6px] relative max-h-full min-h-[10px] z-[1]"
              loading="lazy"
              alt=""
              src={arrows}
            />
            <img
              className="self-stretch w-[16.6px] relative max-h-full object-cover min-h-[10px] z-[1]"
              loading="lazy"
              alt=""
              src={tabs}
            />
          </div>
          <div className="w-[252px] flex flex-col items-start justify-start py-0 pl-0 pr-[26px] box-border">
            <div className="self-stretch shadow-[0px_3.9px_15.47px_#fff_inset,_0px_0.4px_23.2px_rgba(0,_0,_0,_0.1)_inset] rounded-[1.55px] [background:linear-gradient(135deg,_rgba(255,_255,_255,_0),_rgba(0,_0,_0,_0.03)),_#fff] flex flex-row items-start justify-between pt-[1.5px] pb-[2.3px] pl-[95px] pr-[3px] gap-5 z-[1]">
              <img
                className="h-[9.5px] w-[226px] relative rounded-[1.55px] hidden"
                alt=""
                src={combinedShape}
              />
              <div className="w-[37.5px] relative leading-[6px] inline-block shrink-0 z-[1]">
                website.co
              </div>
              <img
                className="h-[5.1px] w-[4.7px] relative z-[1]"
                alt=""
                src={page1}
              />
            </div>
          </div>
          <div className="h-[9.8px] w-[48.4px] relative">
            <img
              className="absolute top-[0px] left-[0px] w-[16.6px] h-[9.5px] object-contain z-[1]"
              loading="lazy"
              alt=""
              src={share}
            />
            <img
              className="absolute top-[0px] left-[19.2px] w-[16.6px] h-[9.5px] object-contain z-[1]"
              alt=""
              src={sites}
            />
            <img
              className="absolute top-[0.3px] left-[38.2px] w-[10.2px] h-[9.5px] object-cover z-[1]"
              alt=""
              src={newPage}
            />
          </div>
        </div>
        <img
          className="w-[512px] relative max-h-full max-w-full z-[1] mt-[-0.1px]"
          loading="lazy"
          alt=""
          src={bG1}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-2 text-left text-13xl text-dark-grey-80">
        <h1
          className="m-0 self-stretch relative text-inherit tracking-[1px] leading-[44px] font-bold font-[inherit] mq450:text-lgi mq450:leading-[26px] mq1050:text-7xl mq1050:leading-[35px]"
          style={projectNameStyle}
        >
          Project Name
        </h1>
        <div className="self-stretch relative text-xl tracking-[0.5px] leading-[24px] text-dark-grey-60 mq450:text-base mq450:leading-[19px]">
          Enterprise - 2019
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
