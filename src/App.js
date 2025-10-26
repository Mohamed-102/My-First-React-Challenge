import HeadBar from './Header/HeadBar';
import Post from './Menu/post';
import SideMenu from './SideMenu/SideMenu';


const showCategories = true;
function App() {
  const posts = [
    {id:1 ,title: "20 Tarmeez Academy", description: "أكاديمية مخصصة لتعليم البرمجة بمختلف لغاتها و تقنياتها"},
    {id:2 ,title: "Hello World", description: "This is the hello world article"},
    {id:3 ,title: "Post 3", description: "This is the body of post 3"},
    {id:4 ,title: "Post 4", description: "This is the body of post 4"},
    {id:5 ,title: "", description: ""},
  ];

  const postList = posts.map((post) => {
    return(
      <Post key={post.id} title={post.title} description={post.description} />
    );
  })

  return (
    <div className="App">
      <header className="App-header">
        <HeadBar />
      </header>

      <div style={{display: "flex", justifyContent: "center"}}>
        <div style={{display: "flex",width: "60%"}}>
          <div style={{width: "70%"}}>
            {postList}
          </div>
          <div style={{width: "30%"}}>
            <AppSideMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

function AppSideMenu(){
  if (showCategories == true) {
    return(<SideMenu />);
  } else {
    return null;
  }
  
}

export default App;
