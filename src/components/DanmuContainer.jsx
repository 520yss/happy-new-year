import { useEffect, useRef, memo } from "react";

const DanmuContainer = memo(({ manager, isNewYear }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      manager.mount(ref.current);
      if (isNewYear) {
        manager.startPlaying();
      }
    }
  }, [isNewYear]);

  return (
    <div
      ref={ref}
      id="RenderContainer"
      className="w-full h-[30%] z-10 absolute top-0 left-0"
      bg-transparent
    />
  );
});

export default DanmuContainer;
