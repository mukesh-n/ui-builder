import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  HtmlElement,
  ToolSet,
  htmlclass,
} from 'src/app/core/models/designcanvas.model';
import { v4 as uuidv4 } from 'uuid';
import { DesignCanvasToolsetComponent } from '../design-canvas-toolset/design-canvas-toolset.component';

@Component({
  selector: 'app-design-canvas',
  templateUrl: './design-canvas.component.html',
  styleUrls: ['./design-canvas.component.scss'],
})
export class DesignCanvasComponent implements OnInit {
  @Input() id: number = 0;
  @Output() getnodeid: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild(DesignCanvasToolsetComponent)
  designCanvasToolsetComponent!: DesignCanvasToolsetComponent;
  rawhtml: string =
    '<div id="ParentContianer" class = "container-fluid p-0"></div>';
  nodeid: string | undefined = '';
  copyrawhtml: string = '';
  iscreate: boolean = false;
  isedit: boolean = false;

  toolkit: ToolSet = new ToolSet();
  hierarchy!: HtmlElement[];
  @Input() node!: HtmlElement;
  selectednode!: HtmlElement;
  collapsed = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private el: ElementRef
  ) {
    console.log(this.toolkit.toolset.styles.length, 'length');
  }

  onModifiedHtml(modifiedHtml: string) {
    console.log('Modified HTML', modifiedHtml);
    this.rawhtml = modifiedHtml;
    this.ConvertDomTreeToHierarchy();
  }

  ngOnInit(): void {
    this.ConvertDomTreeToHierarchy();
  }

  ConvertDomTreeToHierarchy() {
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.rawhtml, 'text/html');
    this.hierarchy = [this.buildHierarchy(doc.body.firstChild as Element, 1)];
    console.log(this.hierarchy);
  }

  private buildHierarchy(element: Element, level: number): HtmlElement {
    const htmlElement: HtmlElement = {
      tag: element.tagName.toLowerCase(),
      id: element.id,
      level: level,
    };
    if (element.children.length > 0) {
      htmlElement.children = Array.from(element.children).map((childNode) =>
        this.buildHierarchy(childNode as Element, level + 1)
      );
    }
    return htmlElement;
  }

  toggleCollapse(node: HtmlElement) {
    console.log(node);
    node.collapsed = !node.collapsed;
  }

  getNode(item: HtmlElement) {
    this.iscreate = true;
    this.isedit = false;
    this.nodeid = item.id;
    this.designCanvasToolsetComponent.toolkit = new ToolSet();

    this.designCanvasToolsetComponent.nodeid = this.nodeid;
    console.log(item);
    this.selectednode = item;
  }

  updateNode(item: HtmlElement) {
    this.isedit = true;
    this.iscreate = false;
    console.log(item);
    this.nodeid = item.id;
    this.selectednode = item;

    const parser = new DOMParser();
    const doc = parser.parseFromString(this.rawhtml, 'text/html');

    let itemId = item.id;
    const targetElement = doc.getElementById(itemId!);

    if (targetElement) {
      let toolset = new ToolSet();
      let classlist = targetElement.classList;
      classlist.forEach((v) => {
        let temp = new htmlclass();
        temp.class = v;
        toolset.toolset.classname.push(temp);
      });

      let stylelist = targetElement.style;
      this.designCanvasToolsetComponent.toolkit = toolset;
    } else {
      console.error(
        `Element with ID '${itemId}' not found in the DOM document.`
      );
    }
  }

  selectedNode(item: HtmlElement) {
    this.iscreate = false;
    this.isedit = false;
    this.selectednode = item;
  }
}
