import { Component } from '@angular/core';
import { TdTabSelectComponent } from '@covalent/core/tab-select';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  private tabs = ["First", "Second"];

  addTab() {
    this.tabs.push(`Tab ${this.tabs.length + 1}`);
  }

  removeTab() {
    this.tabs.pop();
  }
}
