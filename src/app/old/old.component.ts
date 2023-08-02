import { AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-old',
  templateUrl: './old.component.html',
  styleUrls: ['./old.component.scss']
})
export class OldComponent implements AfterViewInit {
  @ViewChild("vc", {read: ViewContainerRef}) vc!: ViewContainerRef;
  @ViewChild("tpl") tpl!: TemplateRef<any>;

  ngAfterViewInit() {
      let view = this.tpl.createEmbeddedView(null);
      this.vc.insert(view);
  }
}

// Angular supports two types of views:

// -> Embedded Views which are linked to a Template
// -> Host Views which are linked to a Component
