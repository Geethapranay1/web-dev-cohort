import { title } from 'process';
import { RevenueCard } from '../components/RevenueCard';

const meta = {
    title: 'Revenue Card',
    component: RevenueCard
}

export default meta;

export const Primary = {
    args: {
        title: "Amount Pending",
        orderCount: "10",
        amount: "1000",

    }
};