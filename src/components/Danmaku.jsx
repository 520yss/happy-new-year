// Render file：demo/src/manager.tsx
export const DanmakuComponent = ({ manager, danmaku }) => {
  let isSelf;
  let content;
  if (typeof danmaku.data === "string") {
    isSelf = true;
    content = danmaku.data;
  } else {
    isSelf = danmaku.data.isSelf;
    content = danmaku.data.content;
  }

  danmaku.use({
    beforeMove(dm) {
      for (const key in manager.statuses) {
        dm.setStyle(key, manager.statuses[key]);
      }
    },
  });

  return (
    <div>
      <div
        onMouseEnter={() => danmaku.pause()}
        onMouseLeave={() => {
          if (!manager.isFreeze()) {
            danmaku.resume();
          }
        }}
        onClick={() => {
          setTimeout(() => danmaku.destroy("mark"), 100);
        }}
        className={`${
          isSelf ? "border-2 border-solid border-teal-500" : ""
        } py-[5px] px-3 rounded-xl font-bold text-white text-center cursor-pointer flex items-center"`}
      >
        <span className="mr-1">{content}</span>
      </div>
    </div>
  );
};
