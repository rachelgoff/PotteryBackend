import Pottery from '../models/pottery';
import moment from 'moment';

const dates = ['Today', 'Tomorrow', moment().add(2, 'days').format('ddd, MMM D')];
const time = ['9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ];

export const index = (req, res, next) => {
    Pottery.find().lean().exec((err, potteries) => res.json(
        {
            potteries: potteries.map(pottery=>({
                ...pottery,
                dates,
                time,                
            }))
        }))   
}
