import { ReactNode } from "react"

type Props = {tabs:{name:string,icon:ReactNode, id:number}[]}

function Sidebar({tabs}:Props) {
    return (
      <>
          <main className="sidebar">
              <div>
                  <h1 className="sidebar-element"> Chatbot <img src="/images/gs2e1.png" alt="" /> </h1>
                  <div>{
                    tabs.map(
                        (tab) => (
                            <div className="sidebar-element" key={tab.id}>
                              {tab.icon}
                                <h2 className="links">{tab.name}</h2>
                            </div>
                        )
                    )
                  }
                </div>
              </div>

          </main>
      </>
    )
  }
  
  export default Sidebar