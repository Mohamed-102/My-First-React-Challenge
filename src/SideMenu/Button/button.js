import "./button.css";

export default function Btn({title,children}){
    return(
        <div>
            {title == null | title == "" ? (
                <div></div>
            ) : (
                <button className="btn">
                    {title}
                    {children}
                </button>
            )}
            
        </div>
    );
}