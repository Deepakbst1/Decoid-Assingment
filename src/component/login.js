


import React from 'react';
import { Link } from "react-router-dom";
import facebookLogo from '../images/facebook-logo.png';
import GoogleLogo from '../images/google-logo.png';
import SignalLogo from '../images/signal.svg';
import WifiLogo from '../images/wifi.svg';
import BatteryLogo from '../images/battery.svg';





function Login() {
	return (
		<div className="relative w-[375px] h-[800px] mx-auto border border-black rounded-[10px]">
            <div className="flex items-center justify-end space-x-2 px-4 py-2">
                <p className="mr-4" style={{
                    color: '#252727',
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '500px',
                    height: '18px',
                    top: '12px',
                    left: '14px',
                    gap: '0px',
                    opacity: '0px',
                    fontFamily: 'Montserrat',
                    fontSize: '15px',
                    fontWeight: '600',
                    lineHeight: '18.29px',
                    letterSpacing: '-0.30000001192092896px',
                    textAlign: 'center'
                }}> 9:41</p>
                <img src={SignalLogo} alt='cellular connection' />
                <img src={WifiLogo} alt='wifi' />
                <img src={BatteryLogo} alt='battery' />
            </div>
			<h1 className="text-[#2C2B2B] font-robo text-[20px] font-semibold my-8 px-4">Welcome Back</h1>

			<form className="flex flex-col items-center space-y-6 min-h-[510px]">

				
				<input
					className="rounded-xl focus:outline-blue-600 bg-[#F1F1F1] w-[343px] h-[50px] px-4 font-semibold text-[#7F7F7F] text-[12px]"
					type='text'
					placeholder='Email'
				/>
				<input
					className="rounded-xl focus:outline-blue-600 bg-[#F1F1F1] w-[343px] h-[50px] px-4 font-semibold text-[#7F7F7F] text-[12px]"
					type='password'
					placeholder='Password'
				/>
				
				<p className="self-start px-4 -mt-6 underline cursor-pointer text-[#7F7F7F] text-[12px] ">Forgot your password?</p>
				


				<Link to='/goals' className="absolute top-[560px]">
					<button
						type='submit'
						className="w-[343px] h-[50px] font-semibold text-white bg-gradient-to-r from-[#7B91FF] to-[#95BEFF] rounded-xl "
					>
						Sign In
					</button>
				</Link>
				
			</form>

			<div className="flex items-center justify-center space-x-2">
				<div className="w-[157px] h-[2px] bg-gray-400"></div>
				<p className="font-medium">Or</p>
				<div className="w-[157px] h-[2px] bg-gray-400"></div>
			</div>

			<div className="flex items-center justify-center space-x-4 my-6">
				<div className="w-[44px] h-[44px] flex items-center justify-center rounded-lg border border-[#7F7F7F] cursor-pointer">
					<img src={GoogleLogo} alt='Google' />
				</div>
				<div className="w-[44px] h-[44px] flex items-center justify-center rounded-lg border border-[#7F7F7F] cursor-pointer">
					<img src={facebookLogo} alt='Facebook' />
				</div>
			</div>

			<p className="font-medium text-[12px] text-center">
				Don’t have an account yet?  <Link to='/register'><span className="text-blue-500 underline">Create an account</span></Link>
			</p>

			



		</div>

	);
}

export default Login;


// function Login() {
//     const [loggedIn, setLoggedIn] = useState(false);
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     function handleLogin(e) {
//         e.preventDefault();

//         if (username.trim() === '' || password.trim() === '') {
//             setError('Username and password are required.');
//         } else {
//         
//             if (username === 'user' && password === 'password') {
//                 setLoggedIn(true);
//                 setError('');
//             } else {
//                 setLoggedIn(false);
//                 setError('Invalid username or password.');
//             }
//         }
//     }

