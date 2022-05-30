import "../style.css";

function sign_up() {
  return (
    <form className="sign-up">
      <div className="sign-up-box">
        <h2>회원가입</h2>
        <div className="sign-up-sale">
            <img src="./images/saleman.PNG" className="sale--image"></img>
            <h2>판매자</h2>
        </div>
        <div className="sign-up-person">
            <img src="./images/person.PNG" className="person--image"></img>
            <h2>일반인</h2>
        </div>
      </div>
    </form >
  );
}

export default sign_up;
