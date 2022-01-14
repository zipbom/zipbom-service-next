import { useRef, useState } from "react";
import { Form } from "antd";

const ServiceLoginForm: React.FC = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  return (
    <Form>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <input name="user-id" value={id} onChange={handleChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">패스워드</label>
        <br />
        <input
          name="user-password"
          value={id}
          onChange={handleChangePassword}
          required
        />
      </div>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <input name="user-id" value={id} onChange={handleChangeId} required />
      </div>
    </Form>
  );
};

export default ServiceLoginForm;
