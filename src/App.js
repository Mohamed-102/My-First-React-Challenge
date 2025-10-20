import HeadBar from './Header/HeadBar';
import Post from './Menu/post';
import SideMenu from './SideMenu/SideMenu';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeadBar />
      </header>

      <div style={{display: "flex", justifyContent: "center"}}>
        <div style={{display: "flex",width: "60%"}}>
          <div style={{width: "70%"}}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
          <div style={{width: "30%"}}>
            <SideMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
