import { useState } from "react";
import { KakaoSignUpButton } from "@components/auth/templates/styles/KakaoSignUpLayoutStyle";

interface Data {
  data: any;
}

const KakaoSignUpLayout: React.FC = () => {
  const [data, setData] = useState<Data>();

  const responseKaKao = (res: any) => {
    setData({
      data: res,
    });
    alert(JSON.stringify(data));
  };

  const responseFail = (err: any) => {
    alert(err);
  };

  return (
    <>
      <h1>카카오톡 간편 로그인</h1>
      <h4>로그인 후 더 많은 혜택을 누리세요!</h4>
      <br />
      <KakaoSignUpButton
        token="0bc49585a7075990aec9f91ee3ba96ff"
        onSuccess={responseKaKao}
        onFail={responseFail}
      />
    </>
  );
};

export default KakaoSignUpLayout;
