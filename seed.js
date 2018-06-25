var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
var Athlete = require('./server/api/athletes/athlete.model.js');
var AthleteModel = Promise.promisifyAll(mongoose.model('Athlete'));


connectToDb.then(function () {

    mongoose.connection.db.dropDatabase();
    var athletes = [
        {
            name: 'Lebron James',
            birthDate: Date.now(),
            nationality: 'US',
            location: 'Cleveland, Ohio',
            association: 'NBA',
            team: 'Cleveland Cavaliers',
            gender: 'Male',
            sports: ['Basketball', 'Football'],
            about: 'He is a good bball player',
            interests: ['Free Agency'],
            charities: ['Lebron Foundation'],
            socialMedia: ['@LebronJames'],
            pets: ['dog', 'cat'],
            alcoholCons: true,
            married: true
        },
        {
            name: 'Saquon Barkley',
            birthDate: Date.now(),
            nationality: 'US',
            location: 'NY, NY',
            association: 'NFL',
            team: 'New York Giants',
            gender: 'Male',
            sports: ['Football', 'Basketball', 'Soccer', 'Golf'],
            about: '2nd overall pick',
            interests: ['weight lifting', 'quads'],
            charities: ['Saquon Foundation'],
            socialMedia: ['@SaquonBarkley'],
            pets: ['dog', 'cat'],
            alcoholCons: true,
            married: true
        }
    ];
    return AthleteModel.create(athletes)
})
    .then(function(){
        console.log(chalk.green('Seed successful!'));
        process.kill(0);
    })
    .catch(function(err){
        console.error(err);
        process.kill(1);
    });
