import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import WebIntro from './pages/WebIntro/WebIntro';
import VerifyEmail from './pages/VerifyEmail/VerifyEmail';
import MainPage from './pages/MainPage/MainPage';
import MyTask from './pages/MyTask/MyTask';
import Home from './pages/Home/Home';
import BlankProject from './pages/BlankProject/BlankProject';
import './assets/css/resetCss.css';
import BasicMenu from './components/Demo/Menu/BasicMenu';
import BoardView from './pages/ProjectBoardView/BoardView';
import { Provider } from 'react-redux';
import store from './redux/configStore';
import { URLS } from './routes/routesAsana.js';


function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path={URLS.webIntro} element={<WebIntro />} />
					<Route path={URLS.login} element={<Login />} />
					<Route path={URLS.signUp} element={<SignUp />} />
					<Route path={URLS.verifyEmail} element={<VerifyEmail />} />
					<Route path={URLS.mainPage} element={<MainPage />}>
						<Route path={URLS.workspace} element={<Home />} />
						<Route path={URLS.myTask} element={<MyTask />} />
						<Route path={URLS.boardView} element={<BoardView />} />
					</Route>
					<Route path={URLS.newProject} element={<BlankProject />} />
				</Routes>
			</BrowserRouter>
		</Provider>
		
	);
}

export default App;
