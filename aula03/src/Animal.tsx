import "./Animal.css";

interface AnimalProps {
    icone?: string;
    nome?: string;
    peso?: number;
    emExtincao?: boolean;
}

export default function Animal() {
    return <div className="animal">Animal</div>;
}