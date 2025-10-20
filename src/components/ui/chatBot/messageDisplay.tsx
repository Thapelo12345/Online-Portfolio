type Prop = {
  client: string;
  msg: string;
};
export default function MessageDisplay({ msg, client }: Prop) {
  return (
    <div
      className={`font-semibold p-2 m-2 text-xs w-fit flex-wrap rounded-tr-2xl rounded-tl-2xl
            ${
              client === "bot"
                ? "self-end bg-blue-900 text-white rounded-bl-2xl "
                : "self-start bg-[whitesmoke] text-black rounded-br-2xl"
            }
            `}
      style={{
        boxShadow:
          client === "bot"
            ? "0px 0px 7px rgba(0, 0, 225, 0.6)"
            : "0px 0px 7px rgba(200, 200, 200, 0.6)",
      }}
    >
      {msg}
    </div>
  );
}
