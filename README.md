# ng-orderby-pipe
 angular orderby pipe for array of strings and objects

Install
 
    npm i ng-orderby-pipe
    
Add to the angular app
 
    import {OrderByModule} from 'ng-orderby-pipe';

    @NgModule({
      imports: [
        OrderByModule,
        ...
      ],
      ...
    })
 
Usage

    orderBy:key:desc/asc (default asc)

1)Order an array of strings

    *ngFor="let value of values| orderBy

2)Order an array of objects

    *ngFor="let value of values| orderBy:'brand':'desc'"

3)Order an array of objects with nested object

    *ngFor="let value of values| orderBy:'config.memory'"

Refer to an example app @ https://github.com/vsomasvr/angular-orderby-pipe-example
