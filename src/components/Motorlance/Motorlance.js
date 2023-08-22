import {useState , React} from 'react';
import logo from '../../assets/images/a.png';

const Motorlance = () => {

const [date , setDate] = useState('');
const [statename , setSatename] = useState('');
const [university , setUniversity] = useState('');
const [missions , setMissions] = useState('');
const [cures , setCures] = useState('');
const [referrals , setReferrals] = useState('');
const [deaths , setDeaths] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(date , statename , university , missions , cures , referrals , deaths);   
}
    return (
        <div className='w-full'>

            <div className='flex justify-center items-center'>
                <img src={logo} alt='logo1' className='w-32'/>
            </div>

        <div className='grid grid-cols-1 md:mx-12 mx-4 my-4'>
        

            <div className='flex justify-center items-center font-bold text-lg pb-8'>ثبت اطلاعات موتورلانس</div>
            
         <form onSubmit={handleSubmit}>
               
                    <div className='bg-gray-300 py-2 font-bold'>اطلاعات پایه</div>

                    <div className='grid md:grid-cols-3 grid-cols-1 bg-gray-200 pb-4'>
                    <div className='grid grid-cols-1 p-4'>
                        <label className='pb-2'>تاریخ</label>
                        <input type='text' id='date' className='mx-8 text-center rounded-lg'
                        value={date} onChange={(e) => setDate(e.target.value)}/>
                    </div>

                    <div className='grid grid-cols-1 p-4'>
                        <label className='pb-2'>نام استان</label>
                        <input type='text' id='state' className='mx-8 text-center rounded-lg'
                        value={statename} onChange={(e) => setSatename(e.target.value)}/>
                    </div>

                    <div className='grid grid-cols-1 p-4'>
                        <label className='pb-2'>نام دانشگاه</label>
                        <input type='text' id='university' className='mx-8 text-center rounded-lg'
                        value={university} onChange={(e) => setUniversity(e.target.value)}/>
                    </div>

                    </div>
                   
                    <div className='bg-gray-300 py-2  font-bold'> نتایج ماموریت ها</div>
                    <div className='grid md:grid-cols-4 grid-cols-2 bg-gray-200 pb-8'>

                    <div className='grid grid-cols-1 p-2'>
                        <label className='pb-2'> کل ماموریت ها</label>
                        <input type='number' id='mission' className='mx-8 text-center rounded-lg'
                        value={missions} onChange={(e) => setMissions(e.target.value)}/>
                    </div>

                    <div className='grid grid-cols-1 p-2'>
                        <label className='pb-2'>کل درمان در محل </label>
                        <input type='number' id='cure' className='mx-8 text-center rounded-lg'
                        value={cures} onChange={(e) => setCures(e.target.value)}/>
                    </div>

                    <div className='grid grid-cols-1 p-2'>
                        <label className='pb-2 md:text-base text-xs'>کل ارجاع به مراکز درمانی </label>
                        <input type='number' id='referral' className='mx-8 text-center rounded-lg'
                        value={referrals} onChange={(e) => setReferrals(e.target.value)}/>
                    </div>

                    <div className='grid grid-cols-1 p-2'>
                        <label className='pb-2'> کل فوت</label>
                        <input type='number' id='death' className='mx-8 text-center rounded-lg'
                        value={deaths} onChange={(e) => setDeaths(e.target.value)}/>
                    </div>

                    </div>
                    <button className='mt-8 bg-green-400 px-16 py-2 font-semibold rounded-full'>ثبت</button>
            </form>

        </div>

    </div>
    );
};

export default Motorlance;