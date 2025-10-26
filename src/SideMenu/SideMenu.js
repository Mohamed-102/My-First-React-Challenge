import Btn from "./Button/button";
import "./Button/button.css";

export default function SideMenu(){
    const categories = [
        {
            id:1 ,
            title: "New",
            children: (<p>💫💫💫</p>),
        },

        {
            id:2 ,
            title: "The most readable",
            children: (
                <div>
                    <img src="https://cdn.pixabay.com/photo/2016/05/15/15/12/hepatica-1393813_640.jpg" alt="flowerImage"
                        style={{
                            width: "120px"
                        }}
                    />
                </div>
            ),
        },

        {
            id:3 ,
            title: "Special Articles", 
            children: (
                <div>
                    <p style={{fontSize: "20px"}}>🌟🌟🌟</p>
                    <img src="https://images.unsplash.com/photo-1538998073820-4dfa76300194?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZSUyMGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
                        alt="FlowerPicture"
                        style={{
                            width: "90px"
                        }}
                    />
                </div>
            ),
        },

        {
            id:4 ,
            title: "", 
            children: (<div></div>),
        },
    ];

    const categoriesList = categories.map((cat) => {
        return(
            <Btn key={cat.id} title={cat.title} >
                {cat.children}    
            </Btn>
        );
    })

    return(
        <div style={{margin: "25px", border: "solid teal 5px", width: "100%", textAlign: "center"}}>
            {categoriesList}
        </div> 
    );
}