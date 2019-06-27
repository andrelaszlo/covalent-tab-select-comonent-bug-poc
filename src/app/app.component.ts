import { Component } from '@angular/core';
import { TdTabSelectComponent } from '@covalent/core/tab-select';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  private tabs = ["First", "Second"];
  private markForCheck = false;
  private selectedTab = this.tabs[0];

  addTab(tabSelect: TdTabSelectComponent) {
    this.tabs.push(`Tab ${this.tabs.length + 1}`);
    if (this.markForCheck) {
      tabSelect._changeDetectorRef.markForCheck();
    }
  }

  removeTab(tabSelect: TdTabSelectComponent) {
    this.tabs.pop();
    if (this.markForCheck) {
      tabSelect._changeDetectorRef.markForCheck();
    }
  }

  checkManually(tabSelect: TdTabSelectComponent) {
    tabSelect._changeDetectorRef.markForCheck();
  }
}
