import { Link } from 'react-router-dom';
import SignalLogo from '../images/signal.svg';
import WifiLogo from '../images/wifi.svg';
import BatteryLogo from '../images/battery.svg';
import ButtonLogo from '../images/button1.svg'
import JoggingLogo from '../images/jogging.png';


function Page1() {
	return (
		<div className="relative w-[375px] h-[800px] mx-auto border border-black rounded-[10px]">
			<div className="flex items-center justify-end space-x-2 px-4 py-2">
			<p className="mr-4" style={{color: '#252727',display: 'flex',justifyContent: 'space-between',width: '500px',height: '18px',top: '12px',left: '14px',gap: '0px',opacity: '0px',fontFamily: 'Montserrat',fontSize: '15px',fontWeight: '600',lineHeight: '18.29px',letterSpacing: '-0.30000001192092896px',textAlign: 'center'}}> 9:41</p>
				<img src={SignalLogo} alt='cellular connection' />
				<img src={WifiLogo} alt='wifi' />
				<img src={BatteryLogo} alt='battery' />
			</div>
			<Link to='/register'>
				<p className='underline text-[#9FB2FF] text-right px-4'>Skip</p>
			</Link>
			<div className='flex items-center justify-center h-[450px]'>
				<img src={JoggingLogo} alt='Jogging' />
			</div>
			<h1 className='font-semibold text-[20px] px-2 mb-4'>Track Your Goal</h1>
			<p className='px-2 text-[#787878]' style={{fontFamily: 'Montserrat'}}>
				Don’t worry if you have trouble determining your goals,
				We can help you determine your goals and track your goals
			</p>

			<Link to='/page2'>
				<img className='absolute bottom-[44px] right-[16px]' src={ButtonLogo} alt='Button'/>
			</Link>

		</div>

	);
}

export default Page1;