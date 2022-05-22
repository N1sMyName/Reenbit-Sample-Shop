import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forOwn, omit, capitalize } from 'lodash';
import * as staticData from './staticData';

interface FooterInfoStyle {
  itemsContainer: boolean;
  active: boolean;
}
interface FooterInfoDataset {
  label: string;
  data: string[];
  styles: FooterInfoStyle;
}
@Component({
  selector: 'app-static-nav-bot',
  templateUrl: './static-nav-bot.component.html',
  styleUrls: ['./static-nav-bot.component.sass'],
})
export class StaticNavBotComponent implements OnInit {
  constructor(public route: Router, public active: ActivatedRoute) {}
  tags = staticData.tags;
  footerInfoData: FooterInfoDataset[] = [];
  styles: FooterInfoStyle[] = [];
  previousTab: number | null;

  ngOnInit(): void {
    this.generateStyles();
    this.generateEndData();
  }
  // opens tab by id
  expandTab(id: number) {
    console.log(`fda`);
    console.log(this.previousTab)
    console.log(id)
    if ((this.previousTab === id)) {
      this.footerInfoData[id].styles.active = !this.footerInfoData[id].styles.active;
      return;
    }
    if (typeof this.previousTab === 'number') {
      console.log(`prev number`)
      this.shrinkTab(this.previousTab);
    }
    this.footerInfoData[id].styles.active = true;
    this.previousTab = id;
  }
  // close previous tab
  shrinkTab(id: number) {
    this.footerInfoData[id].styles.active = false;
  }
  // deletes tags property from object
  deleteUnwantedFields() {
    return omit(staticData, 'tags');
  }
  // creates styles blueprint
  generateStyles() {
    forOwn(this.deleteUnwantedFields(), (_) =>
      this.styles.push({ itemsContainer: true, active: false })
    );
  }
  // creates complete data for list
  generateEndData() {
    forOwn(this.deleteUnwantedFields(), (v, k) =>
      this.footerInfoData.push({
        label: capitalize(k),
        data: v,
        styles: { itemsContainer: true, active: false },
      })
    );
  }
  
}
