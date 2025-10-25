import HeadBar from './Header/HeadBar';
import Post from './Menu/post';
import SideMenu from './SideMenu/SideMenu';


const showCategories = true;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeadBar />
      </header>

      <div style={{display: "flex", justifyContent: "center"}}>
        <div style={{display: "flex",width: "60%"}}>
          <div style={{width: "70%"}}>
            <Post title="20 Tarmeez Academy" description="أكاديمية مخصصة لتعليم البرمجة بمختلف لغاتها و تقنياتها" />
            <Post title="Hello World" description="This is the hello world article" />
            <Post title="Post 3" description="This is the body of post 3" />
            <Post title="Post 4" description="This is the body of post 4" />
            <Post />
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
