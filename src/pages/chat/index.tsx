import Sidebar from "../../components/sidebar";
import history from "../../assets/dummy_hist.json";
import ChatElement from "../../components/chatelement";
import ChatBar from "../../components/chatbar";
type Props = { tabs: { name: string; icon: JSX.Element; id: number, route:string }[] };
function ChatPage({ tabs }: Props) {
  return (
    <>
      <Sidebar tabs={tabs} />
      <main className="Chat">
        <div className="main-box">
          <div className="chat">
            {Array.from(history, (message) => (
              <ChatElement key={message.id} message={message} />
            ))}
          </div>
          <div>
            <ChatBar />
          </div>
        </div>
      </main>
    </>
  );
}

export default ChatPage;
