import { Component, Input, ElementRef, OnChanges } from '@angular/core';

@Component({
  selector      : 'read-more',
  templateUrl   : 'app/components/utils/read.more.component.html',
   styles: [`
        div.collapsed {
            overflow: hidden;
        }
   `]
})

export class ReadMoreComponent implements OnChanges {

    @Input() text: string;
    @Input() maxHeight: number;
    maxLength : number = 5;
    currentText: string;
    hideToggle: boolean = true;
    public isCollapsed: boolean = false;
    public isCollapsable: boolean = false;

    constructor(private elementRef: ElementRef) {

    }

    toggleView() {
        this.isCollapsed = !this.isCollapsed;
        this.determineView();
    }

    determineView() {
        console.log("this.text.length =%o ",this.text.length)
        if (this.text.length <= this.maxLength) {
            this.currentText = this.text;
            this.isCollapsed = false;
            this.hideToggle = true;
            return;
        }
        this.hideToggle = false;
        if (this.isCollapsed == false) {
            console.log("isCollapsed if =%o ",this.isCollapsed)
            this.currentText = this.text.substring(0, this.maxLength) + "...";
        }
        else if(this.isCollapsed == true)  {
            console.log("isCollapsed else =%o ",this.isCollapsed)
            this.currentText = this.text;
        }

    }
    ngOnChanges() {
        this.determineView();
    }
}
