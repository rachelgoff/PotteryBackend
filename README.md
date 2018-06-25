# PotteryBackend
This server code works with [PotteryClient app](https://github.com/rachelgoff/PotteryClient) to help pottery fans to track their status when making and firing pottery.

## Check Node.js version and install the latest Node.js package
Check for Node.js & npm versions >= 6
```
$ node -v
$ npm -v
```

Install the latest Node.js package by following instructions on the Node.js offical website. Download the latest Node.js from https://nodejs.org/en/download/ and follow steps to install the LTS version of Node.js. You need admin user access to install Node.js globaly.

Install the latest version of npm
```
$ sudo npm install npm@latest -g
```

## Install and Run MongoDB
Download and install the latest MongoDB by following the instructions on the MongoDB website: https://docs.mongodb.com/manual/installation/.

### Create MongoDB's data directory
```
$ sudo mkdir /data/db
$ sudo chown <username> /data/db
```

### Run mongod
```
$ mongod
```

## Clone the PotteryBackend repository
```
$ cd ~/git
$ git clone https://github.com/rachelgoff/PotteryBackend.git
```

## Install required libaries and modules for PotteryBackend
```
$ cd PotteryBackend
$ npm install
```

## Run the PotteryBackend server

### Populate the sample data 
```
$ npm run populate
```

### Check the populated data in the Mongo Shell
```
$ mongo
> show dbs
> use potteries
> db.potteries.find().pretty()
{
	"_id" : ObjectId("5b30057d35001b51dae6b928"),
	"dates" : [ ],
	"time" : [ ],
	"firingDate" : [
		"2018-05-01",
		"2018-05-10"
	],
	"firingType" : [
		"Bisque",
		"Wood Fire"
	],
	"glazeDate" : [
		"2018-05-01",
		"2018-05-10"
	],
	"pottery_id" : "1",
	"key" : "001",
	"potteryName" : "cold stone",
	"clayBody" : "porcelain",
	"weight" : 50,
	"height" : 30,
	"width" : 30,
	"glazeType" : "Shino",
	"__v" : 0
}
{
	"_id" : ObjectId("5b30057d35001b51dae6b929"),
	"dates" : [ ],
	"time" : [ ],
	"firingDate" : [
		"2018-05-03",
		"2018-05-18"
	],
	"firingType" : [
		"Cone 5",
		"Salt Fire"
	],
	"glazeDate" : [
		"2018-05-03",
		"2018-05-18"
	],
	"pottery_id" : "2",
	"key" : "002",
	"potteryName" : "hot stone",
	"clayBody" : "stoneware",
	"weight" : 50,
	"height" : 30,
	"width" : 30,
	"glazeType" : "Celadon",
	"__v" : 0
}
```

### Start the PotteryBackend server
```
$ npm run start
```

### Test the server API
```
$ curl http://localhost:8080/v1/potteries.json
{
	"potteries": [{
		"_id": "5b30057d35001b51dae6b928",
		"dates": ["Today", "Tomorrow", "Tue, Jun 26"],
		"time": ["9:00 AM", "11:10 AM", "12:00 PM", "1:50 PM", "4:30 PM", "6:00 PM", "7:10 PM", "9:45 PM"],
		"firingDate": ["2018-05-01", "2018-05-10"],
		"firingType": ["Bisque", "Wood Fire"],
		"glazeDate": ["2018-05-01", "2018-05-10"],
		"pottery_id": "1",
		"key": "001",
		"potteryName": "cold stone",
		"clayBody": "porcelain",
		"weight": 50,
		"height": 30,
		"width": 30,
		"glazeType": "Shino",
		"__v": 0
	}, {
		"_id": "5b30057d35001b51dae6b929",
		"dates": ["Today", "Tomorrow", "Tue, Jun 26"],
		"time": ["9:00 AM", "11:10 AM", "12:00 PM", "1:50 PM", "4:30 PM", "6:00 PM", "7:10 PM", "9:45 PM"],
		"firingDate": ["2018-05-03", "2018-05-18"],
		"firingType": ["Cone 5", "Salt Fire"],
		"glazeDate": ["2018-05-03", "2018-05-18"],
		"pottery_id": "2",
		"key": "002",
		"potteryName": "hot stone",
		"clayBody": "stoneware",
		"weight": 50,
		"height": 30,
		"width": 30,
		"glazeType": "Celadon",
		"__v": 0
	}]
}
```
