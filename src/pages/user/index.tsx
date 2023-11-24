import Sidebar from "../../components/sidebar";
import useFetch from "../../hooks/useFetch";
import "./custom.css";

// const token = "eyJ0eXAiOiJKV1QiLCJub25jZSI6Iks1T1JibURHQnFYNWd6LWhNUnBYTmkwRElNaVdEVk9ZSmxmdVh1QTB2RlEiLCJhbGciOiJSUzI1NiIsIng1dCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84YjMyNWVhOC04ZjU1LTRjMjEtYWExMS1kYzFjN2Y5Nzc2YzAvIiwiaWF0IjoxNzAwODI2NDkzLCJuYmYiOjE3MDA4MjY0OTMsImV4cCI6MTcwMDgzMDY1OCwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhWQUFBQVRaZnBvNml4Tlc5aGhLTVo4MlBXdjhGdllVV0owMjlJUDJoTDdHL0Uvb3AxM280NkpIenc1NUw4Zi82TkxaRisiLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IkFNSTJfQVBJIiwiYXBwaWQiOiI5NTQ0ZTZmNi1mNmZkLTQ0YTgtYWNmZC1lZjAzZWUzMmJhOTUiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IktPVUFESU8tQkhFR05JTiIsImdpdmVuX25hbWUiOiJPVEhOSUVMIEtVQVdPIEFOQVRPTEUiLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiIxMDIuMjIyLjgyLjQiLCJuYW1lIjoiS09VQURJTy1CSEVHTklOIE9USE5JRUwgS1VBV08gQU5BVE9MRSIsIm9pZCI6IjQxOThlNWJiLTM5MmItNGNjMS05MjZlLWU3YTQ1ODQ2ZmExYSIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS0yOTE4MzIzOTE1LTkwMjAxODcxNS0zODk0MzM2Nzk0LTIyMzc3NSIsInBsYXRmIjoiMTQiLCJwdWlkIjoiMTAwMzIwMDJFQjVEQjU3NyIsInJoIjoiMC5BUkVBcUY0eWkxV1BJVXlxRWR3Y2Y1ZDJ3QU1BQUFBQUFBQUF3QUFBQUFBQUFBQVJBUHMuIiwic2NwIjoiVXNlci5SZWFkIFVzZXIuUmVhZC5BbGwgVXNlci5SZWFkQmFzaWMuQWxsIFVzZXIuUmVhZFdyaXRlIFVzZXIuUmVhZFdyaXRlLkFsbCIsInN1YiI6ImMySWpkV1huRnk2NmFKQVBVMkcwLVdVcGNRUUt6c3ZsaDdGLWc5a2x3bG8iLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiQUYiLCJ0aWQiOiI4YjMyNWVhOC04ZjU1LTRjMjEtYWExMS1kYzFjN2Y5Nzc2YzAiLCJ1bmlxdWVfbmFtZSI6Im90aG5pZWwua291YWRpb0BnczJlLmNpIiwidXBuIjoib3RobmllbC5rb3VhZGlvQGdzMmUuY2kiLCJ1dGkiOiJFdThTRk9HRWdraXR2akQycGpvekFRIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX3RjZHQiOjE0MzUzMjM1NTV9.pbgDmna7mKG1zl0d2w6RgKUYIhwiVQTpDAJinTJzBYNjx3yUk25jg_EmKh58LsNdBvcnMr1e6oabWHBrUL0IwJPfSWV-s0iuM97HzIwv-N848LeyX-vC7skRAN_8qnK7kTm1_hwpi7k7Y5KeAC_iWlTLlfOC9V1AWY7G_uMtU9wybXvpIeHcvPz0T6kRIM7Iob_LxVXYR9RWg1EeCs5210-Em8QLWFo1GsW0yx-E2NBESzM0po0oC2p04Z_s1twfZwtIQbt9IiNAh0Gg2-5VPlllTISvtTW8pdQs-fR3CaKCfG50IMdshzJBq337uENg9JPpf2nNCCyscI5lG7R8zw"
const token = localStorage.getItem("token");

type Props = {
  tabs: { name: string; icon: JSX.Element; id: number; route: string }[];
};
function UserPage({ tabs }: Props) {
  // Data
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

  const info = useFetch("http://localhost:3000/user", {
    body: { token },
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  if (info.data !== null) {
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
                    return (
                      <>
                        <h6>{dataCorr[k as keyof typeof dataCorr]!}</h6>
                        <p>{info.data![k]}</p>
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
  } else {
    return <div>Just log in nigga</div>;
  }
}
export default UserPage;
