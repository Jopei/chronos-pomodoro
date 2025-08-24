import { Heading } from "./components/Heading";
import "./styles/theme.css"
import "./styles/global.css"

export function App(){
    return (
        <>
            <Heading attr={123} attr2='vesvo'> Olá Chronos! (Do App.tsx) </Heading>
            <p> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officiis in, 
                a voluptatibus accusantium obcaecati esse exercitationem ad maiores nostrum 
                autem sunt expedita eveniet, sapiente ullam amet tenetur facere dolorem!
            </p>
        </>
    );
}

