import { Navbar } from "./tracker";
import { Link } from "react-router-dom";
import SignalLogo from '../images/signal.svg';
import WifiLogo from '../images/wifi.svg';
import BatteryLogo from '../images/battery.svg';
import LeftArrow from '../images/left-arrow.png';
import plus from '../images/plus.png';

const weeks = [
	{
		week: 'Sun',
		date: 5,
	},
	{
		week: 'Mon',
		date: 6,
	},
	{
		week: 'Tue',
		date: 7,
	},
	{
		week: 'Wed',
		date: 8,
	},
	{
		week: 'Thu',
		date: 9,
	}	
];

const times = [
	'06:00 AM',
	'07:00 AM',
	'08:00 AM',
	'09:00 AM',
	'10:00 AM',
	'11:00 AM',
	'12:00 AM',
	'01:00 AM',
	'02:00 AM',
	'03:00 AM',
	'04:00 AM',
	'05:00 AM'
];



function Schedule() {
	return ( 
		<div className="relative w-[375px] h-[800px] mx-auto border border-black rounded-[10px] px-2">
			<div className="flex items-center justify-end space-x-2 px-4 py-2">
			<p className="mr-4" style={{color: '#252727',display: 'flex',justifyContent: 'space-between',width: '500px',height: '18px',top: '12px',left: '14px',gap: '0px',opacity: '0px',fontFamily: 'Montserrat',fontSize: '15px',fontWeight: '600',lineHeight: '18.29px',letterSpacing: '-0.30000001192092896px',textAlign: 'center'}}> 9:41</p>
				<img src={SignalLogo} alt='cellular connection' />
				<img src={WifiLogo} alt='wifi' />
				<img src={BatteryLogo} alt='battery' />
			</div>
			<div className="flex  items-center mt-8 ">
				<Link to='/goals'>
					<img src={LeftArrow} alt='Left arrow' />
				</Link>
				<h1 className="text-[#2C2B2B] text-center font-robo text-[20px] font-semibold  mx-auto px-4">Workout Schedule</h1>
			</div>
			<p className="mt-4 text-center text-[#2C2B2B] text-[12px] font-semibold">{'<  Feb 2024  >'}</p>
			<div className="w-[343px] mt-4 h-[76px] flex items-center justify-evenly">
				{
					weeks.map(item => {
						return (
							<div
								className={`${item.date === 6? 'bg-gradient-to-r to-[#a5b1ea] from-[#e9ebee]': ''} flex flex-col items-center py-1 w-[63px] h-[76px] text-[#454545] rounded-[10px]`}
								key={item.date}
							>
								<p className="text-[11px] font-semibold">{item.week}</p>
								<p className="text-[28px] font-semibold">{item.date}</p>
							</div>
						)
					})
				}

			</div>

			<div className="text-[#2C2B2B] text-[12px] mt-6 font-semibold space-y-2">
				{
					times.map((time, index) => {
						if (index === 1) {
							return (
								<div className="space-y-2 relative">
									<p>{time}</p>
									<p className="text-[12px] text-center absolute top-[6px] right-[20px] w-[150px] px-2 py-1 rounded-[20px] font-semibold text-white bg-gradient-to-r from-[#D3A4F4] to-[#E9B1E0]">Ab Workout, 7:30am</p>
									<hr className="z-20 w-[375px] -ml-2 h-[5px]" />
								</div>
							)
						} else if (index === 3) {
							return (
								<div className="space-y-2 relative">
									<p>{time}</p>
									<p className="text-[12px] text-center absolute top-[-6px] right-[75px] w-[190px] px-2 py-1 rounded-[20px] font-semibold text-white bg-gradient-to-r from-[#D3A4F4] to-[#E9B1E0]">Upperbody Workout, 9am</p>
									<hr className="z-20 w-[375px] -ml-2 h-[5px]" />
								</div>
							)
						} else if (index === 8) {
							return (
								<div className="space-y-2 relative">
									<p>{time}</p>
									<p className="text-[12px] text-center absolute top-[-15px] right-[75px] w-[180px] px-2 py-1 rounded-[20px] font-semibold text-[#2C2B2B] bg-[#F1F1F1]">Lowerbody Workout, 3pm</p>
									<hr className="z-20 w-[375px] -ml-2 h-[5px]" />
								</div>
							)

						}


						return (
							<div className="space-y-2">
								<p>{time}</p>
								<hr className="z-20 w-[375px] -ml-2 h-[5px]"/>
							</div>
						)
					})
				}

			</div>
			<div className="absolute top-[602px] left-[296px] cursor-pointer flex items-center justify-center h-[63px] w-[63px] bg-gradient-to-r from-[#E9B1E0] to-[#D3A5F2] rounded-[50%]">
				<img src={plus} alt='plus icon'  />
			</div>

			<Navbar />

		</div>


	);
}

export default Schedule;