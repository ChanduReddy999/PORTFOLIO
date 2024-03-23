import './App.css';
import ContactUs from './components/contactUs/contactUs';
import Footer from './components/footer/footer';
import Welcome from './components/intro/welcome';
import PersonalInfo from './components/personalInfo/personalInfo';
import Resume from './components/resume/resume';
import Services from './components/services/services';
import SideBar from './components/sideBar/sideBar';
import Skills from './components/skills/skills';

function App() {
  return (
    <>
      <SideBar />
      <Welcome />
      <PersonalInfo />
      <Resume />
      <Skills />
      <Services />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
