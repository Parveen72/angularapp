import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';
@Component({
  selector: 'app-sub1',
  templateUrl: './sub1.component.html',
  styleUrls: ['./sub1.component.css']
})
export class Sub1Component implements OnInit {
std = {
    rn: '',
    sname: '',
    per: '',
    res: ''
  };
  constructor(private ob: DemoService) {
    this.ob.rn.subscribe(res => {
      this.std.rn = res;
    })
    this.ob.stdname.subscribe(res => {
      this.std.sname = res;
    })
    this.ob.per.subscribe(res => {
      this.std.per = res;
    })
    this.ob.res.subscribe(res => {
      this.std.res = res;
    })
  }
  ngOnInit() {}
  onClick(r, n, p, res) {
    this.ob.rn.next(r.value);
    this.ob.stdname.next(n.value);
    this.ob.per.next(p.value);
    this.ob.res.next(res.value);
  }
}
