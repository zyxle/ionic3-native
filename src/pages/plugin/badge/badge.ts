import { Component } from '@angular/core';
import { Badge } from '@ionic-native/badge';
import { UtilService } from "../../../providers/UtilService";

@Component({
  selector: 'page-badge',
  templateUrl: 'badge.html',
  providers: [Badge]
})
export class BadgePage {
  badgeNum:number = 0;
  constructor(public badge: Badge, public utilService: UtilService) {
    this.initDatas();
  }

  initDatas() {
    this.badge.get().then((number) => {
      this.badgeNum = number;
    });
  }
  // 清空角标
  clearBadge() {
    this.badge.clear();
    this.badgeNum = 0;
  }
  // 设置为10
  setBadge() {
    this.badge.set(10);
    this.badgeNum = 10;
  }
  // 角标加一
  increaseBadge() {
    this.badge.increase(1);
    this.badgeNum += 1;
  }
  // 角标减一
  decreaseBadge() {
    this.badge.decrease(1);
    this.badgeNum -= 1;
  }
  // 获取角标数目
  getBadge() {
    this.badge.get().then((number) => {
      this.badgeNum = number;
      this.utilService.showAlert('提示', '角标数目为：' + number);
    });
  }

}
