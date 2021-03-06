import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

import * as moment from 'moment';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material';
import { DATE_FORMAT } from '../date-format.def';
import {MomentDateAdapter} from '@angular/material-moment-adapter';

import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT },
  ]
})
export class SidenavComponent implements OnInit {
    public times: string[] = [];
    public formgroup: FormGroup;

    public time: FormControl;
    public date: FormControl;

    // public readonly time_regex = new RegExp(/\b((1[0-2]|0?[1-9]):([0-5][0-9]) ([AaPp][Mm]))/g);
    public readonly time_regex = new RegExp(/\b(0?\d|1[0-2]):[0-5]\d (AM|PM)/);

    public readonly TIME_FORMAT = 'h:mm A';
    public readonly DATE_FORMAT = 'MMMM D, YYYY';

    constructor(
        private formBuilder: FormBuilder
    ) {
        const test1 = "3:50PM";
        console.log(test1[test1.length - 3]);

        console.log( test1.substr(0, test1.length - 2));
        console.log( test1.substr(-2, 2));
        const start = moment();
        const remainder = 30 - (start.minute() % 30 );
        const dateTime = moment(start).add(remainder, "minutes").format(this.TIME_FORMAT);


        for ( let t = 0; t < 2; t++ ) {
            for ( let j = 0; j < 2; j++ ) {
                for ( let i = 1; i < 13; i++ ) {
                    this.times.push( `${i}:${j === 0 ? '00' : '30'} ${t === 0 ? 'AM' : 'PM'}` );
                }
            }
        }

        this.times = this.times.sort((a: string, b: string) => {
            const aTime = moment( a, this.TIME_FORMAT );
            const bTime = moment( b, this.TIME_FORMAT );

            if ( aTime.isSame(bTime) ) {
                return 0;
            }

            return aTime.isAfter( bTime ) ? 1 : -1;
        });
    }

    public ngOnInit(): void {
        const start = moment();
        const remainder = 30 - (start.minute() % 30 );
        const dateTime = moment(start).add(remainder, 'm').format(this.TIME_FORMAT);

        this.time = new FormControl( dateTime , Validators.pattern(/\b((1[0-2]|0?[0-9]):([0-5][0-9]) ([AaPp][Mm]))/));
        this.date = new FormControl( moment() );

        this.formgroup = this.formBuilder.group({
            'time': this.time,
            'date': this.date
        });
    }

    public validateField(): void {
        const value: string = this.time.value;
        const ampm: string = value.substr( -2, 2 ).toUpperCase();
        console.log(value);
        if ( value[ value.length - 3 ] !== ' ' && (ampm === 'AM' || ampm === 'PM') ) {
            this.time.setValue( `${value.substr(0, value.length - 2 )} ${ampm}`)
        }
    }

    public subtract(): void {
        this.time.setValue( moment(this.time.value, this.TIME_FORMAT).subtract(30, 'm').format(this.TIME_FORMAT) );
    }

    public add(): void {
        this.time.setValue( moment(this.time.value, this.TIME_FORMAT).add(30, 'm').format(this.TIME_FORMAT) );
    }

    public subtractDate(): void {
        this.date.setValue ( moment( this.date.value, this.DATE_FORMAT ).subtract( 1, 'd') );
    }

    public addDate(): void {
        this.date.setValue ( moment( this.date.value, this.DATE_FORMAT ).add( 1, 'd') );
    }
}
