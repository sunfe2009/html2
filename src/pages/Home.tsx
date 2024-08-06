import { FunctionComponent, useCallback } from "react";
import Thumbnail from "../components/Thumbnail";

const Home: FunctionComponent = () => {
  const onThumbnail1ContainerClick = useCallback(() => {
    // Please sync "Project #1" to the project
  }, []);

  const onThumbnail2ContainerClick = useCallback(() => {
    // Please sync "Project #3" to the project
  }, []);

  const onThumbnail3ContainerClick = useCallback(() => {
    // Please sync "Project #2" to the project
  }, []);

  const onThumbnail4ContainerClick = useCallback(() => {
    // Please sync "Project #4" to the project
  }, []);

  const onThumbnail5ContainerClick = useCallback(() => {
    // Please sync "Project #5" to the project
  }, []);

  const onThumbnail6ContainerClick = useCallback(() => {
    // Please sync "Project #6" to the project
  }, []);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-40 px-5 pb-80 box-border gap-40 leading-[normal] tracking-[normal] gap-20 gap-10 gap-5">
      <section className="w-[1444px] flex flex-col items-start justify-start gap-[35.5px] max-w-full text-left text-[56px] text-dark-grey-80 font-inter gap-[18px]">
        <img
          className="w-10 h-[40.5px] relative object-cover"
          loading="lazy"
          alt=""
          src="/hello@2x.png"
        />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-0 box-border max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit tracking-[1px] leading-[80px] font-bold font-[inherit] inline-block max-w-full mq450:text-[34px] mq450:leading-[48px] mq1050:text-[45px] mq1050:leading-[64px]">
            <p className="m-0">{`I'm a Product Designer with UI & UX skills`}</p>
            <p className="m-0">
              who love to build powerful and elegant products
            </p>
            <p className="m-0">
              with x years of experience in the tech industry
            </p>
            <p className="m-0">I'm currently working at Lorem Ipsum.</p>
          </h1>
        </div>
      </section>
      <section className="w-[1448px] flex flex-row items-start justify-start py-0 pl-1 pr-2.5 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[72px] max-w-full gap-9 gap-[18px]">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[74px] max-w-full gap-[37px] gap-[18px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[72px] min-w-[442px] max-w-full gap-9 mq750:min-w-full gap-[18px]">
              <Thumbnail
                bG="/bg.svg"
                dots="/dots.svg"
                arrows="/arrows.svg"
                tabs="/tabs@2x.png"
                combinedShape="/combined-shape.svg"
                page1="/page-1.svg"
                share="/share@2x.png"
                sites="/sites@2x.png"
                newPage="/new-page@2x.png"
                bG1="/bg.svg"
                onThumbnail1ContainerClick={onThumbnail1ContainerClick}
              />
              <Thumbnail
                bG="/bg.svg"
                dots="/dots-1.svg"
                arrows="/arrows-1.svg"
                tabs="/tabs-1@2x.png"
                combinedShape="/combined-shape.svg"
                page1="/page-1-1.svg"
                share="/share-1@2x.png"
                sites="/sites-1@2x.png"
                newPage="/new-page-1@2x.png"
                bG1="/bg-1.svg"
                shareIconAlignSelf="stretch"
                shareIconFlex="unset"
                shareIconMinWidth="unset"
                sitesIconBackgroundColor="#d6f3f3"
                newPageIconBackgroundColor="#d6f3f3"
                propAlignSelf="stretch"
                onThumbnail1ContainerClick={onThumbnail2ContainerClick}
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[72px] min-w-[442px] max-w-full gap-9 mq750:min-w-full gap-[18px]">
              <Thumbnail
                bG="/bg.svg"
                dots="/dots-2.svg"
                arrows="/arrows-2.svg"
                tabs="/tabs@2x.png"
                combinedShape="/combined-shape.svg"
                page1="/page-1-2.svg"
                share="/share@2x.png"
                sites="/sites-2@2x.png"
                newPage="/new-page-2@2x.png"
                bG1="/bg-2.svg"
                shareIconAlignSelf="stretch"
                shareIconFlex="unset"
                shareIconMinWidth="unset"
                sitesIconBackgroundColor="#ffefd7"
                newPageIconBackgroundColor="#ffefd7"
                propAlignSelf="stretch"
                onThumbnail1ContainerClick={onThumbnail3ContainerClick}
              />
              <Thumbnail
                bG="/bg.svg"
                dots="/dots-3.svg"
                arrows="/arrows-3.svg"
                tabs="/tabs@2x.png"
                combinedShape="/combined-shape.svg"
                page1="/page-1-3.svg"
                share="/share@2x.png"
                sites="/sites-3@2x.png"
                newPage="/new-page-3@2x.png"
                bG1="/bg-3.svg"
                shareIconAlignSelf="stretch"
                shareIconFlex="unset"
                shareIconMinWidth="unset"
                sitesIconBackgroundColor="#dbecff"
                newPageIconBackgroundColor="#dbecff"
                propAlignSelf="unset"
                onThumbnail1ContainerClick={onThumbnail4ContainerClick}
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[74px] max-w-full gap-[37px] gap-[18px]">
            <Thumbnail
              bG="/bg.svg"
              dots="/dots-4.svg"
              arrows="/arrows-4.svg"
              tabs="/tabs-4@2x.png"
              combinedShape="/combined-shape.svg"
              page1="/page-1-4.svg"
              share="/share-4@2x.png"
              sites="/sites-4@2x.png"
              newPage="/new-page-4@2x.png"
              bG1="/bg-4.svg"
              shareIconAlignSelf="unset"
              shareIconFlex="1"
              shareIconMinWidth="442px"
              sitesIconBackgroundColor="#cbd7e4"
              newPageIconBackgroundColor="#cbd7e4"
              propAlignSelf="stretch"
              onThumbnail1ContainerClick={onThumbnail5ContainerClick}
            />
            <Thumbnail
              bG="/bg.svg"
              dots="/dots-5.svg"
              arrows="/arrows-5.svg"
              tabs="/tabs-5@2x.png"
              combinedShape="/combined-shape.svg"
              page1="/page-1-5.svg"
              share="/share@2x.png"
              sites="/sites@2x.png"
              newPage="/new-page-5@2x.png"
              bG1="/bg-5.svg"
              shareIconAlignSelf="unset"
              shareIconFlex="1"
              shareIconMinWidth="442px"
              sitesIconBackgroundColor="#cbd7e4"
              newPageIconBackgroundColor="#cbd7e4"
              propAlignSelf="stretch"
              onThumbnail1ContainerClick={onThumbnail6ContainerClick}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
