import {BrowserRouter,Link,Switch, Route,Routes} from 'react-router-dom'
import MovieDetailPage from './pages/MovieDetailPage';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route  path= "/" element = {<MovieDetailPage/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
