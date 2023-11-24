import React from 'react'
import LoginPage from './form';
import Feed from './feed';
import Page from './post';
import Profile from './profile';
import Navigation from './navigation';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";











// const App = () => {
//   return (
//     <div>
//       <LoginPage/>
//       <Feed/>
//       <Page/>
//       <Profile/>
//       {/* <Post/> */}
//       {/* <App/> */}
// </div>
//   )
// }



function App() {
  return (
      <div>
        <Router>
        <Navigation/>
        <Routes>
          <Route exact path="/" element={<LoginPage/>}/>
          <Route exact path="/feed" element={<Feed/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
          <Route exact path="/post" element={<Page/>}/>
        </Routes>
        </Router>
      </div>
  );
}
export default App;