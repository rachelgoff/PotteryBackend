import mongoose from 'mongoose';
import Pottery from './models/pottery';

const potteries = [
    {
        pottery_id: '1',
        key:'001',
        potteryName: 'cold stone',
        clayBody: 'porcelain',
        weight: 50,
        height: 30,
        width: 30,
        firingDate: ['2018-05-01', '2018-05-10'],
        firingType: ['Bisque', 'Wood Fire'],
        glazeDate: ['2018-05-01', '2018-05-10'],
        glazeType: 'Shino'     
    },
    {
        pottery_id: '2',
        key:'002',
        potteryName: 'hot stone',
        clayBody: 'stoneware',
        weight: 50,
        height: 30,
        width: 30,
        firingDate: ['2018-05-03', '2018-05-18'],
        firingType: ['Cone 5', 'Salt Fire'],
        glazeDate: ['2018-05-03', '2018-05-18'],
        glazeType: 'Celadon'       
    }]
    
    mongoose.connect('mongodb://localhost/potteries')
    
    potteries.map(data=>{
        const pottery = new Pottery(data);
        pottery.save()
    })
