import "./button.css";

export default function Btn({title,children}){
    return(
        <button className="btn">
            {title}
            {children}
        </button>
    );
}