import { Component } from '@angular/core';
import { CeiboShare } from 'ng2-social-share';

@Component({
    moduleId: module.id,
    selector: 'body-root',
    templateUrl: 'body.component.html',
    styleUrls: ['body.component.css'],
    directives:[CeiboShare]
  })
  
export class BodyComponent {

    units:any;
    end:any;
    Days:string;
    Hours:string;
    Minutes:string;
    Seconds:string;
    
    constructor(){ 
        this.units = 'Days | Hours | Minutes | Seconds';
        this.end = 'January 31, 2017';
        this.Days='4';
        setInterval(()=>this.displayString(), 1);
    }
    
    displayString() {

        if (typeof this.units === 'string') {
            this.units = this.units.split('|');
        }


        var dateDifference = new Date(this.end).getTime() - new Date().getTime();
        var lastUnit = this.units[this.units.length - 1],
            unitConstantForMillisecs = {
                weeks: (1000 * 60 * 60 * 24 * 7),
                days: (1000 * 60 * 60 * 24),
                hours: (1000 * 60 * 60),
                minutes: (1000 * 60),
                seconds: 1000,
                milliseconds: 1
            },
            unitsLeft = {},
            returnString = '',
            totalMillisecsLeft = dateDifference,
            i,
            unit:any;
        for (i in this.units) {
            if (this.units.hasOwnProperty(i)) {

                unit = this.units[i].trim();
                if (unitConstantForMillisecs[unit.toLowerCase()] === false) {
                    //$interval.cancel(countDownInterval);
                    throw new Error('Cannot repeat unit: ' + unit);

                }
                if (unitConstantForMillisecs.hasOwnProperty(unit.toLowerCase()) === false) {
                    throw new Error('Unit: ' + unit + ' is not supported. Please use following units: weeks, days, hours, minutes, seconds, milliseconds');
                }

                unitsLeft[unit] = totalMillisecsLeft / unitConstantForMillisecs[unit.toLowerCase()];

                if (lastUnit === unit) {
                    unitsLeft[unit] = Math.ceil(unitsLeft[unit]);
                } else {
                    unitsLeft[unit] = Math.floor(unitsLeft[unit]);
                }
                totalMillisecsLeft -= unitsLeft[unit] * unitConstantForMillisecs[unit.toLowerCase()];
                unitConstantForMillisecs[unit.toLowerCase()] = false;


                returnString += ' ' + unitsLeft[unit] + ' ' + unit;
                
                if(unit.toLowerCase()=='days')
                    this.Days=unitsLeft[unit];
                if(unit.toLowerCase()=='hours')
                    this.Hours=unitsLeft[unit];
                if(unit.toLowerCase()=='minutes')
                    this.Minutes=unitsLeft[unit];
                if(unit.toLowerCase()=='seconds')
                    this.Seconds=unitsLeft[unit];
                
                
            }
        }
        //return returnString;
    }
    
}