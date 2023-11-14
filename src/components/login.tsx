import * as Form from "@radix-ui/react-form";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon, EnterIcon } from "@radix-ui/react-icons";
function LoginComponent() {
  return (
    <>
      <div className="tabContainer">
        <Form.Root>
          <Form.Field name="email">
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
