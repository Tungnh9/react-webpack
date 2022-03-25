import * as React from "react";
import { useCookies } from "react-cookie";

export interface Props {
  email?: string;
  password?: string;
}

const Form: React.FC<Props> = () => {
  const [values, setValue] = React.useState<Props | any>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState<any>({});
  const [cookies, setCookies] = useCookies(["user"]);

  const handleChangeValue = (event: any) => {
    const { name, value } = event.target;
    setValue({ ...values, [name]: value });
  };

  const validateForm = (value: any) => {
    let showError: object | any = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!value.email) {
      showError.email = "Required !";
    } else if (!regexEmail.test(value.email)) {
      showError.email = "Invalid email address !";
    }

    if (!value.password) {
      showError.password = "Required !";
    } else if (value.password.length < 4) {
      showError.password = "Password must not be less than 4 characters";
    }

    return showError;
  };

  const handleSubmit = (event: Event | any) => {
    event.preventDefault();
    setErrors(validateForm(values));

    if (values.email && values.password.length > 4) {
      // localStorage.setItem("key", JSON.stringify(values));
      // const local = localStorage.getItem("key");
      // JSON.parse(local);

      setCookies("user", values.email, { path: "/" });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <span>{JSON.stringify(values, undefined, 2)}</span> */}
        <div className="">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChangeValue}
            className="form-input"
            placeholder="username@gmail.com"
          />
          <span className="danger">{errors.email}</span>
        </div>

        <div className="form-control">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChangeValue}
            className="form-input"
            placeholder="Password"
          />
          <span className="danger">{errors.password}</span>
        </div>

        <button type="submit" className="submit-form">
          Sign in
        </button>
      </form>
    </>
  );
};

export default Form;
