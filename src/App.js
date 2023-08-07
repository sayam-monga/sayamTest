import './App.css';
import Footer from './components/footer/footer';
import Interviews from './components/interview(homepageComponent)/interview';
import StudentPanorama from './components/studentPanaroma/studentPanaorma';
import Team from './components/team(homepageComponent)/team';

function App() {
  return (
    <div className="App">
      <StudentPanorama/>
      <Team></Team>
      <Interviews></Interviews>
      <Footer></Footer>
    </div>
  );
}

export default App;
