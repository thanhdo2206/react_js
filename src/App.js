import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import WebIntro from './pages/WebIntro/WebIntro';
import VerifyEmail from './pages/VerifyEmail/VerifyEmail';
import MainPage from './pages/MainPage/MainPage';
import MyTask from './components/MainPage/MyTask/MyTask';
import Home from './components/MainPage/Home/Home';
import { useSelector, useDispatch } from 'react-redux';

function App() {
	const currentWorkSpace = useSelector(
		state => state.AsanaReducer.currentWorkSpace
	);

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<WebIntro />}></Route>
				<Route path='login' element={<Login />} />
				<Route path='sign-up' element={<SignUp />} />
				<Route path='verify-email' element={<VerifyEmail />} />
				<Route path='main-page' element={<MainPage />}>
					<Route path={`home/${currentWorkSpace.workspace_id}`} element={<Home />} />
					<Route path='my-task' element={<MyTask />} />
				</Route>
			</Routes>
		</BrowserRouter>
		// <div>
		//   <ListItemDemo></ListItemDemo>

		// </div>
	);
}

export default App;
