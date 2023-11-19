import './App.css';
import Article from './components/article';
import Footer from './components/footer';
import Header from './components/header';
import Left from './components/left';
import Right from './components/right';
import { useState } from 'react';

function update(section, value) {
    return new Promise((resolve, reject) => {
        var url = `/update/${section}/${value}`;        
        superagent
            .get(url)
            .end(function(err, res){
                err ? reject(null) : resolve(res.body);
            });
    });
}

function read() {
    return new Promise((resolve, reject) => {
        var url = '/data';
        superagent
            .get(url)
            .end(function(err, res){
                err ? reject(null) : resolve(res.body);
            });
    });
}

function App(){
  const [data, setData]   = useState({header:0,left:0,article:0,right:0,footer:0});    

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
