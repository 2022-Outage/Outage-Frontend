import "../style.css";

function sign_in() {
  return (
    <form className="sign-in">
      <h1 className="sign-in-title">outage</h1>
      <div>
        <div className="sign-in-box">
          <h2 className="sign-in-h2">로그인 하기</h2>
          <div>
            <input type="text" placeholder="아이디" />
            <input type="password" placeholder="비밀번호" />
          </div>
          <input className="sign-in-button" type="submit" value="로그인" />
          <p>
            회원이 아니신가요? <a>회원가입하기</a>
          </p>
        </div>
      </div>
    </form >
  );
}

export default sign_in;
