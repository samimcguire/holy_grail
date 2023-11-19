import logo from './logo.svg';
import './App.css';
import Article from './components/article';
import Footer from './components/footer';
import Header from './components/header';
import Left from './components/left';
import Right from './components/right';

function App(){
  const [data, setData]   = React.useState({header:0,left:0,article:0,right:0,footer:0});    

  function handle(section){
      console.log('Pong', section);
      const value  = data[section.name] + section.value;
      const object = {[section.name]:value};
      setData({...data, ...object});
  }

  return (<>
      <div className="grid">        
          <Header  handle={handle} data={data}/>
          <Left    handle={handle} data={data}/>
          <Article handle={handle} data={data}/>
          <Right   handle={handle} data={data}/>
          <Footer  handle={handle} data={data}/>
      </div>
  </>);
}

export default App;
