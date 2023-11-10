import { MouseEvent } from "react";

function swap(e: MouseEvent) {
  const myClass = "active-btn";
  const saphir = document.getElementById("saphir")!;
  const chatgpt = document.getElementById("chatgpt")!;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  switch (e.target.id) {
    case "saphir":
      saphir.classList.add(myClass);
      chatgpt.classList.remove(myClass);
      break;
    case "chatgpt":
      chatgpt.classList.add(myClass);
      saphir.classList.remove(myClass);
      break;

    default:
      break;
  }
}
function MiddleBar() {
  return (
    <>
      <div className="middlebar">
        <div className="button-box">
          <button className="toggle-btn active-btn" onClick={swap} id="saphir">
            Saphir
          </button>
          <button className="toggle-btn" onClick={swap} id="chatgpt">
            ChatGPT
          </button>
        </div>
      </div>
    </>
  );
}

export default MiddleBar;
