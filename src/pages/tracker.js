import { Link } from "react-router-dom";
import SignalLogo from '../images/signal.svg';
import WifiLogo from '../images/wifi.svg';
import BatteryLogo from '../images/battery.svg';
import LeftArrow from '../images/left-arrow.png';
import Chart from '../images/chart.png';
import Alert from '../images/alert.png';
import Home from '../images/home.png';
import Analytics from '../images/analytics.png';
import Search from '../images/search.png';
import Camera from '../images/camera.png';
import Person from '../images/person.png';
import workout1 from '../images/workout1.png';
import workout2 from '../images/workout2.png';
import workout3 from '../images/workout3.png'; 

function Tracker() {
	return (
		<>
		<div className="relative w-[375px] h-[800px] mx-auto border border-black rounded-[10px] px-2">
		<div className="flex items-center justify-end space-x-2 px-4 py-2">
			<p className="mr-4" style={{color: '#252727',display: 'flex',justifyContent: 'space-between',width: '500px',height: '18px',top: '12px',left: '14px',gap: '0px',opacity: '0px',fontFamily: 'Montserrat',fontSize: '15px',fontWeight: '600',lineHeight: '18.29px',letterSpacing: '-0.30000001192092896px',textAlign: 'center'}}> 9:41</p>
				<img src={SignalLogo} alt='cellular connection' />
				<img src={WifiLogo} alt='wifi' />
				<img src={BatteryLogo} alt='battery' />
			</div>
			<div className="flex  items-center my-8 ">
				<Link to='/goals'>
					<img src={LeftArrow} alt='Left arrow' />
				</Link>
				<h1 className="text-[#2C2B2B] text-center font-robo text-[20px] font-semibold  mx-auto px-4">Workout Tracker</h1>
			</div>
			<div className="mt-12 px-2">
				<div className="text-[#2C2B2B] text-[11.2px] flex items-center justify-end">
					<p className="mr-10">Good job</p>
					<p className="mr-10">less then 320cal</p>
				</div>
				<img src={Chart} alt='Chart' />
			</div>

			<div className="w-[329px] rounded-[10px]  mt-8 bg-gradient-to-r from-[#819DFF47] to-white flex items-center px-4 py-2 gap-2">
				<img src={Alert} alt='Alert Triangle' />
				<p className="text-[#2C2B2B] text-[12.5px] font-medium ">You've burned fewer calories than yesterday. Time to get moving!</p>
			</div>

			<div className="mt-12 space-y-4">
				<div className="flex items-center justify-between">
					<p className="text-[#2C2B2B] text-[16px] font-semibold">Upcoming Workout</p>
					<p className="text-[#7F7F7F] text-[12px] font-medium cursor-pointer">See more</p>
				</div>
				<div className="w-[343px] h-[75px] flex items-center rounded-xl px-4 py-2 gap-2 shadow-lg">
					<img src={workout1} alt='Workout1' />
					<div className="flex flex-col gap-1">
						<p className="text-[#2C2B2B] text-[12px] font-medium">Full Body Workout</p>
						<p className="text-[#7F7F7F] text-[10px] font-medium">Today 3pm</p>
					</div>
					<div className="ml-auto">
						<input type='checkbox' id='toggle-button1' className="hidden" />
						<label for='toggle-button1' className="button" name='toggleButton'></label>
					</div>
				</div>
				<div className="w-[343px] h-[75px] flex items-center rounded-xl px-4 py-2 gap-2 shadow-lg">
					<img src={workout2} alt='Workout2' />
					<div className="flex flex-col gap-1">
						<p className="text-[#2C2B2B] text-[12px] font-medium">Upper Body Workout</p>
						<p className="text-[#7F7F7F] text-[10px] font-medium">4 Feb, 3:30 pm</p>
					</div>
					<div className="ml-auto">
						<input type='checkbox' id='toggle-button2' className="hidden"  />
						<label for='toggle-button2' className="button" name='toggleButton'></label>
					</div>
				</div>
			</div>
			<div className="mt-4 space-y-2">
				<p className="text-[#2C2B2B] text-[16px] font-semibold">What Do You Want to Train</p>
				<div className="bg-[#8CB1FF99] rounded-t-xl p-4 flex justify-between">
					<div className="text-[#2C2B2B] flex flex-col gap-[2px]">
						<p className="text-[12px] font-medium">Full Body Workout</p>
						<p className="text-[10px] font-medium">Arms</p>
						<p className="text-[10px] font-medium">Chest</p>
					</div>
					<img src={workout3} alt='workout3' />
				</div>
			</div>
			<Navbar />

		</div>
		</>

	);
}


export function Navbar() {
	return (
		<div className="flex items-center justify-evenly bg-white z-10 w-[360px] h-[76px] py-2 absolute bottom-2 mx-auto">
			<Link to='/'>
				<img className="cursor-pointer" src={Home} alt='Home' />
			</Link>
			<Link to='/schedule'>
				<img className="cursor-pointer" src={Analytics} alt='Analytics' />
			</Link>
			<img className="cursor-pointer -mt-12" src={Search} alt='Search' />
			<Link to='/tracker'>
				<img className="cursor-pointer" src={Camera} alt='Camera' />
			</Link>
			<img className="cursor-pointer" src={Person} alt='Person' />
		</div>
	)
}


export default Tracker;