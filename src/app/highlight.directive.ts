import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from "@angular/core";

@Directive({
  selector: '[appHighlight]',
  exportAs: 'appHighlight'
})
export class HighlightDirective {
  constructor(private el: ElementRef) { }

  @Input('appDefaultColor') defaultColor = '';

  @Input('appHighlight') highlightColor = '';

  @Output() appDegree = new EventEmitter<number>();

  public degree: number = 1;
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
    this.degree++;
    // console.log(this.degree);
    // console.log(this.appDegree.emit);
    this.appDegree.emit(this.degree);


  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}