import {Component} from "@angular/core";

@Component({
    selector:"gioithieu",
    template:`<h2><i>THÔNG TIN CÁ NHÂN</i></h2>
    <h3><u>Họ tên:</u> Lê Hữu Thanh<br/>
    <u>Ngày tháng năm sinh:</u> 26/01/2000<br/>
    <u>Cung hoàng đạo:</u> Bảo Bình<br/>
    <u>Sở thích:</u> Nghe nhạc, xem phim,...
    </h3>

    `,
    styles:[
    `
    h2{
        text-align: center;
        width: auto;
        height: auto;
    }
    h3{
        front-size: 13px;
    }
    h4
    {
        front-size: 13px;
    }
    `
    ]

})

export class GioiThieuComponent{
}