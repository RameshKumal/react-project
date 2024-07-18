import reactImg from "../../assets/react-core-concepts.png"

const fundamentals = ["Fundamental", "Crucial", "Core"];

function genRandomInt( max ){
    return Math.floor( Math.random() * (max + 1))
}

export default function Fundamental(){
    const description = fundamentals[genRandomInt(2)];
    return(
        <div>
            <header>
                <img src={reactImg} alt="Stylized atom"  />
                <p>
                    {description} React concepts you will need for almost any app you are
                    going to build!
                </p>
            </header>
            <main>
                <h2>Time to get started!</h2>
            </main>
        </div>
    )
}