import Button from '@mui/material/Button';

export const RevenueCard = ({
    title,
    orderCount,
    amount
}) => {
    return <div className="bg-white rounded shadow-md p-4 transistion ease-in-out delay-150 duration-300 hover:scale-110">
        <div className="text-gray-700 flex items-center pb-5">
            <div className="">{title} </div>
            <div className="pl-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
            </div>

        </div>
        <div className="flex justify-between">
            <div className="font-bold text-3xl ">
                 ₹ {amount}
            </div>
            {orderCount ? <div className="flex cursor-pointer underline font-medium justify-center items-center">
                <div className="text-blue-700">
                    {orderCount} orders
                </div>
                <div className="p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
                
                </div> : null}
        </div>
        <Button variant="contained" color="primary">Payout</Button>

    </div>
}

//storybooks
//mui
//responsive sidebar
//1:44:00