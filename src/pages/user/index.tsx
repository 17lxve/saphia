import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import { useFetch, useRedirect } from "../../hooks";
import "./custom.css";
import { DISTANT_API } from "../../assets/api_calls";

type Props = {
  tabs: { name: string; icon: JSX.Element; id: number; route: string }[];
};
function UserPage({ tabs }: Props) {
const token = localStorage.getItem("token");
const go = useNavigate();
const clear = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
  go('/login')
};
  const dataCorr = {
    fullName: "",
    lastName: "Nom",
    givenName: "Prénoms",
    title: "Fonction",
    location: "Localisation",
    company: "Compagnie",
    accountName: "",
    mail: "Email",
  };
  useRedirect()
  // const capitalize = (text:string) => text.charAt(0) + text.slice(1).toLowerCase()
  const info = useFetch(DISTANT_API + "user", {
    body: { token },
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  if (info.data !== null) {
    console.log(info)
    return (
      <>
        <Sidebar tabs={tabs} />
        <main className="User">
          <div className="main-box grey">
            <div className="centerfield">
              <h5>Informations Personelles</h5>
              <div className="infoPanel">
                {Object.keys(info.data).map((k) => {
                  if (dataCorr[k as keyof typeof dataCorr] != "") {
                    console.log(k)
                    return (
                      <>
                        <h6>{dataCorr[k as keyof typeof dataCorr]!}</h6>
                        <p className={k}>{(info.data![k] as string).toLowerCase()}</p>
                      </>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </main>
      </>
    );
  } else if(info.error) {
    console.log(info)
    clear()
  } else {
    alert("Unexpected error: This error was not encountered during pre-testing. Please report it.")
  }
}
export default UserPage;
