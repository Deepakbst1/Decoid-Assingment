import { Link } from "react-router-dom";
import SignalLogo from '../images/signal.svg';
import WifiLogo from '../images/wifi.svg';
import BatteryLogo from '../images/battery.svg';
const goals = [
	'Weight Loss',
	'Muscle Gain',
	'Flexibility and Mobility',
	'General Fitness',
	'Event - specific training',
	'Mindfulness and Mental Health'
];


function Goals() {
	return ( 
		<div className="relative w-[375px] h-[800px] mx-auto border border-black rounded-[10px]">
			<div className="flex items-center justify-end space-x-2 px-4 py-2">
			<p className="mr-4" style={{color: '#252727',display: 'flex',justifyContent: 'space-between',width: '500px',height: '18px',top: '12px',left: '14px',gap: '0px',opacity: '0px',fontFamily: 'Montserrat',fontSize: '15px',fontWeight: '600',lineHeight: '18.29px',letterSpacing: '-0.30000001192092896px',textAlign: 'center'}}> 9:41</p>
				<img src={SignalLogo} alt='cellular connection' />
				<img src={WifiLogo} alt='wifi' />
				<img src={BatteryLogo} alt='battery' />
			</div>
			<h1 className="text-[#2C2B2B] text-center font-robo text-[20px] font-semibold my-8 px-4">What are your goals?</h1>
			<form className="flex flex-col items-center space-y-6 min-h-[510px]">

				{
					goals.map(goal => {
						return (
							<label
								className="w-[343px] h-[50px] bg-[#F1F1F1] rounded-xl px-4 flex items-center justify-between"
								for={goal}
								key={goal}
							>
								<p className="text-[#2C2B2B] text-[12px] font-semibold">{goal}</p>
								<input 
									className="w-[22px] h-[22px] rounded border border-[#809AFF]"
									type='checkbox'
									id={goal}
								/>
							</label>
						)
					})
				}




				<Link to='/tracker' className="absolute top-[665px]">
					<button
						type='submit'
						className="w-[343px] h-[50px] font-semibold text-white bg-gradient-to-r from-[#7B91FF] to-[#95BEFF] rounded-xl "
					>
						Confirm
					</button>
				</Link>
			</form>
		</div>

	);
}

export default Goals;