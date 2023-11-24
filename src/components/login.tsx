/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as Form from "@radix-ui/react-form";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon, EnterIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
type ExpectedResponse = {data:{user:object, token:{accessToken:string, refreshToken:string}}, isPending:boolean, err:object}
async function submitForm(data: { [k: string]: FormDataEntryValue }):Promise<object> {
  const response = await axios
    .post("http://localhost:3000/auth", data)
    .catch((err) => console.log(err));
  console.warn((response as unknown as ExpectedResponse).data);
  //@ts-ignore
  if (response.data.err) {
    throw Error("Wrong credentials!");
  } else {
    localStorage.setItem("token", (response as unknown as ExpectedResponse).data.token.accessToken);
    localStorage.setItem("refreshToken", (response as unknown as ExpectedResponse).data.token.refreshToken);
    //@ts-ignore
    return response.data.user;
  }
}
function LoginComponent() {
const [tries, setTries] = useState(0)
  const go = useNavigate();
  useEffect(() => {
    if(localStorage.getItem("token")){
      go("/profile")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tries])
  return (
    <>
      <div className="tabContainer">
        <Form.Root
          // `onSubmit` only triggered if it passes client-side validation
          onSubmit={(event) => {
            const data = Object.fromEntries(new FormData(event.currentTarget));

            // Submit form data and catch errors in the response
            submitForm(data)
              .then((res) => {
                console.log(res);
                setTries(tries+1)
              })
              /**
               * Map errors from your server response into a structure you'd like to work with.
               * In this case resulting in this object: `{ email: false, password: true }`
               */
              .catch((errors) => alert(errors.message));

            // prevent default form submission
            event.preventDefault();
          }}
        >
          <Form.Field name="username">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
                justifyContent: "flex-end",
              }}
            >
              <Form.Label className="FormLabel">
                {" "}
                Email professionnel
              </Form.Label>
              <Form.Message className="FormMessage" match="valueMissing">
                S'il vous plait rentrez votre email GS2E
              </Form.Message>
              <Form.Message className="FormMessage" match="typeMismatch">
                Veuillez fournir un email valide
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input className="Input" type="email" required />
            </Form.Control>
          </Form.Field>
          <Form.Field name="password">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
                justifyContent: "flex-end",
              }}
            >
              <Form.Label className="FormLabel">Mot de passe</Form.Label>
              <Form.Message className="FormMessage" match="valueMissing">
                Le mot de passe est réquis
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input className="Input" type="password" required />
            </Form.Control>
          </Form.Field>
          <br />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              userSelect: "none",
            }}
          >
            <Checkbox.Root className="CheckboxRoot" defaultChecked id="c1">
              <Checkbox.Indicator className="CheckboxIndicator">
                <CheckIcon />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <label className="Label stayO" htmlFor="c1">
              Restez connecté
            </label>
          </div>
          <br />
          <div style={{ display: "flex", alignItems: "center" }}>
            <button className="Button">
              <EnterIcon /> CONNEXION
            </button>
          </div>
        </Form.Root>
      </div>
    </>
  );
}
export default LoginComponent;
