import {Component} from "@angular/core";

@Component({
    selector:"trangchu",
    template:`<h2><u><b>Welcome to my Website</b></u></h2>
    <h3><img src="{{hinh}}"/></h3>
    
    `,
    styles:[
        `
        h2{
            color  : Red;
            text-align:center;
        }
        h3{
            text-align:center;  
            width = 100%;
        }
        `
    ]

})

export class TrangChuComponent{
hinh:string="https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.0-0/s280x280/77093498_2553634878206706_8590586542265729024_n.jpg?_nc_cat=100&_nc_ohc=SgaarzxDR4QAX_IITI0&_nc_ht=scontent.fsgn4-1.fna&_nc_tp=7&oh=f800c818ba5bac03660df8ab32468326&oe=5EBC44AB";
}