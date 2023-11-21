type Props = { message: { text: string; id: number; sender: string } };
function ChatElement({ message }: Props) {
  return (
    <div className={"msg-box " + message.sender}>
      <div className="pp" />
      <div className="txt-box">{message.text}</div>
    </div>
  );
}
export default ChatElement;
