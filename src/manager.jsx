import { uuid } from "aidly";
import ReactDOM from "react-dom/client";
import { create } from "danmu";
import { DanmakuComponent } from "./components/Danmaku";

const sentences = [
  "Hello, world!",
  "This is a test sentence.",
  "This is a test sentence. This is a test sentence. This is a test sentence.",
  "short sentence",
  "this is a test words",
  "this is a test words",
  "this is a test words",
  "this is a test words",
  "this is a test words",
  "this is a test words",
];

export const initManager = () => {
  const manager = create({
    interval: 500,
    trackHeight: 40,
    durationRange: [10000, 13000],
    plugin: {
      $createNode(dm) {
        if (!dm.node) return;
        ReactDOM.createRoot(dm.node).render(
          <DanmakuComponent manager={manager} danmaku={dm} />
        );
      },
    },
  });
  return manager;
};

export const mock = (manager) => {
  setInterval(() => {
    for (let i = 0; i < 10; i++) {
      manager.push(
        {
          isSelf: false,
          content: sentences[i],
        },
        { id: uuid() }
      );
    }
  }, 1500);
};

export const autoFormat = (manager) => {
  const resizeObserver = new ResizeObserver(() => manager.format());
  resizeObserver.observe(document.body);
};
