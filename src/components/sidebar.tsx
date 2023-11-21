// import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
type Props = {
  tabs: { name: string; icon: JSX.Element; id: number; route: string }[];
};
function Sidebar({ tabs }: Props) {
  const go = useNavigate();
  return (
    <>
      <main className="sidebar">
        <div className="sidebar-container">
          <h1 className="sidebar-element logo">
            {" "}
            Chatbot <img src="/images/gs2e1.png" alt="GS2E" />{" "}
          </h1>
          <div style={{ width: "80%" }}>
            {tabs.map((tab) => (
              <div
                className={
                  tab.id == 4
                    ? "sidebar-element down link"
                    : "sidebar-element link"
                }
                key={tab.id}
                onClick={() => go(tab.route)}
              >
                {tab.icon}
                <h2 className="links">{tab.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Sidebar;
