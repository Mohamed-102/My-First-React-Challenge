import Btn from "./Button/button";

export default function SideMenu(){
    return(
        <div style={{margin: "25px", border: "solid teal 5px", width: "100%", textAlign: "center"}}>
            <Btn title="New">
                <p>💫💫💫</p>
            </Btn>

            <Btn title="The most readable">
                <div>
                    <img src="https://cdn.pixabay.com/photo/2016/05/15/15/12/hepatica-1393813_640.jpg" alt="flowerImage"
                        style={{
                            width: "120px"
                        }}
                    />
                </div>
            </Btn>
            
            <Btn title="Special Articles">
                <div>
                    <p style={{fontSize: "20px"}}>🌟🌟🌟</p>
                    <img src="https://images.unsplash.com/photo-1538998073820-4dfa76300194?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZSUyMGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
                        alt="FlowerPicture"
                        style={{
                            width: "90px"
                        }}
                    />
                </div>
            </Btn>
        </div>
    );
}