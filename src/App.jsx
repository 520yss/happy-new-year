import { useState, useEffect } from "react";
import { useMount, useUnmount } from "react-use";
import dayjs from "dayjs";
import Fireworks from "./components/Fireworks";
import CountdownTimer from "./components/CountdownTimer";
import Container from "./components/DanmuContainer";
import Photos from "./components/photos";
import Ido from "./assets/Ido.mp3";
import { useRef } from "react";

// const NewYear = new Date("2022-01-01T00:00:00").getTime();

const App = ({ manager }) => {
  // 倒计时
  const [countdown, setCountdown] = useState(
    dayjs().isAfter("2024-12-29 12:00:00")
      ? 3
      : dayjs("2024-12-30 12:00:00").diff(dayjs(), "second")
  );
  const [isNewYear, setIsNewYear] = useState(false);
  const timer = useRef(null);

  useMount(() => {
    timer.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
  });

  useUnmount(() => {
    clearInterval(timer.current);
  });

  useEffect(() => {
    const audio = document.getElementById("audioPlayer");
    if (countdown == 0) {
      setIsNewYear(true);
      clearInterval(timer.current);
      audio.play();
    }
  }, [countdown]);

  return (
    <div className="h-screen w-screen">
      <CountdownTimer countdown={countdown} />
      <Fireworks isNewYear={isNewYear} />
      <Container manager={manager} isNewYear={isNewYear} />
      <Photos isNewYear={isNewYear} />
      <audio id="audioPlayer" loop>
        <source src={Ido} type="audio/mpeg"></source>
      </audio>
    </div>
  );
};

export default App;
