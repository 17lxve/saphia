import { ReactNode } from "react";

type Props = { tabs: { name: string; icon: ReactNode; id: number }[] };

function Sidebar({ tabs }: Props) {
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
