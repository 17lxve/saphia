type Props = {tabs:{name:string, id:number}[]}

function Sidebar({tabs}:Props) {
    return (
      <>
          <main className="sidebar">
              <div>
                  <h1> Sidebar </h1>
                  <div>{
                    tabs.map(
                        (tab) => (
                            <div className="sidebar-element" key={tab.id}>
                                <h2>{tab.name}</h2>
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