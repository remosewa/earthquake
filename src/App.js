import Header from './Header';
import './App.css';
import SiteData from './siteData';
import Home from './Home';
import Detail from './Detail';
import Profile from './Profile';
import { BrowserRouter as Router, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <header>
          <Header logoSrc={SiteData.site.logoImage} titleText={SiteData.site.title} profileText={SiteData.profile.firstName} />
        </header>
        <body>
          <Router>
            <Route exact path="/"><Home title={SiteData.data.metadata.title} earthquakeData={SiteData.data.features}/></Route>
            <Route exact path="/profile"><Profile profile={SiteData.profile}/></Route>
            <Route path="/details/:detailId">
              <DetailContainer />
            </Route>
          </Router>
          
        </body>
    </div>
  );
}

function DetailContainer() {
  const { detailId } = useParams();
  // perhaps we could have 404 page if not found?
  return (
    <Detail detail={SiteData.data.features.find(f => f.id === detailId).properties}/>
  )
}

export default App;
