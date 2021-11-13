const contents = () => {
    const mbti = [ "ENFP", "ENFJ", "ENTP", "ENTJ", "ESFP", "ESFJ", "ESTJ", "ESTP", "INFJ",
                   "INFP", "INTJ", "INTP", "ISFJ", "ISFP", "ISTJ", "ISTP" ];
    const MbtiList = mbti.map((mbti, i) => (<li key={i}>{mbti}</li>));
    return(
        <div className="contents">
            <div className="side">
                <ul>                        
                        {MbtiList}
                </ul>
            </div>
            <div className="article">
                <h2>각 mbti 특징설명</h2>
            </div>
        </div>
    );
}

export default contents;