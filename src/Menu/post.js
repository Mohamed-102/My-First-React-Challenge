export default function Post({title = "no title", description = "no description"}){
    return(
        <div style={{
                padding: "10px",
                border: "solid teal 5px",
                margin: "25px",
                textAlign: "center"
            }}>
            <h2>{title}</h2>
            <hr/>
            <p>{description}</p>
        </div>
    );
}