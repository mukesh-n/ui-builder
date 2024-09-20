import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  DynamicStyle,
  ToolBox,
  ToolBoxSettings,
  ToolSet,
  htmlclass,
} from 'src/app/core/models/designcanvas.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-design-canvas-toolset',
  templateUrl: './design-canvas-toolset.component.html',
  styleUrls: ['./design-canvas-toolset.component.scss'],
})
export class DesignCanvasToolsetComponent implements OnInit {
  @Input() rawhtml: string = '';
  @Input() nodeid: string | undefined = '';

  @Output() modifiedHtml: EventEmitter<string> = new EventEmitter<string>();

  toolkit: ToolSet = new ToolSet();

  toggleswitch: boolean = true;

  toolbox = [
    {
      label: ToolBox.Button,
      value: `<button id="@id" type="button" class="btn btn-@colour btn-@size">@name</button>
      `,
    },
  ];

  toolboxsetting: ToolBoxSettings = new ToolBoxSettings();
  sizelist = [
    {
      label: 'Small',
      value: 'sm',
    },
    {
      label: 'Medium',
      value: 'sm',
    },
    {
      label: 'Large',
      value: 'sm',
    },
  ];
  colourlist = [
    {
      label: 'Primary',
      value: 'primary',
    },
    {
      label: 'Secondary',
      value: 'secondary',
    },
    {
      label: 'Success',
      value: 'success',
    },
    {
      label: 'Info',
      value: 'info',
    },
    {
      label: 'Warning',
      value: 'warning',
    },
    {
      label: 'Danger',
      value: 'danger',
    },
    {
      label: 'Light',
      value: 'light',
    },
    {
      label: 'Dark',
      value: 'dark',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log('toolkit', this.toolkit);
  }

  async createAndEmit() {
    this.createDom();
    const modifiedHtml = this.rawhtml;
    this.modifiedHtml.emit(modifiedHtml);
  }
  async modifyAndEmit() {
    this.modifyDom();
    const modifiedHtml = this.rawhtml;
    this.modifiedHtml.emit(modifiedHtml);
  }

  createDom() {
    const newChild = document.createElement('div');
    const uniqueId = uuidv4();
    newChild.id = uniqueId;
    this.toolkit.toolset.classname.forEach((v) => {
      newChild.className += ' ' + v.class;
    });

    this.toolkit.toolset.styles.forEach((style) => {
      Object.assign(newChild.style, style);
    });

    const parser = new DOMParser();
    const doc = parser.parseFromString(this.rawhtml, 'text/html');

    const parentContainer = doc.getElementById(`${this.nodeid}`);

    if (parentContainer) {
      parentContainer.appendChild(newChild);
      this.rawhtml = doc.documentElement.outerHTML;
      this.toolkit.toolset = new DynamicStyle();
    }
  }

  modifyDom() {
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.rawhtml, 'text/html');
    const container = doc.getElementById(`${this.nodeid}`);

    if (container) {
      Array.from(container.classList).forEach((className) => {
        container.classList.remove(className);
      });
      this.toolkit.toolset.classname.forEach((v) => {
        container.classList.add(v.class);
      });
      this.rawhtml = doc.documentElement.outerHTML;
      this.toolkit.toolset = new DynamicStyle();
    }
  }
  AddClass() {
    this.toolkit.toolset.classname.push(new htmlclass());
  }

  Addstyle() {
    this.toolkit.toolset.styles.push({ key: '', value: '' });
  }

  showCustom() {
    this.toggleswitch = true;
  }
  showToolSets() {
    this.toggleswitch = false;
  }

  deleteClass(item: string) {
    let index = this.toolkit.toolset.classname.findIndex((v) => {
      return v.class == item;
    });
    if (index > -1) {
      this.toolkit.toolset.classname.splice(index, 1);
    }
  }

  deleteStyle(item: { [key: string]: string }) {
    let index = this.toolkit.toolset.styles.findIndex((v) => {
      return v == item;
    });
    if (index > -1) {
      this.toolkit.toolset.styles.splice(index, 1);
    }
  }

  closePopover(index: number) {
    const popover = document.getElementById(`screensizepopupcontent${index}`);
    if (popover) {
      popover.style.display = 'none';
    }
  }

  update(type: string) {
    if (type == ToolBox.Button.toString()) {
      this.createButton(type);
    }
  }
  createButton(type: string) {
    let updatedtoolhtml: string = '';
    let tool = this.toolbox.filter((v) => {
      return v.label.toString() === type.toString();
    })[0];
    if (tool) {
      updatedtoolhtml = tool.value
        .replace(/@colour/, this.toolboxsetting.colour)
        .replace(/@size/, this.toolboxsetting.size)
        .replace(/@name/, this.toolboxsetting.name)
        .replace(/@id/, uuidv4());
      console.log('updatedtoolhtml', updatedtoolhtml);
    }
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.rawhtml, 'text/html');

    const parentContainer = doc.getElementById(`${this.nodeid}`);

    if (parentContainer) {
      const buttonParser = new DOMParser();
      const buttonDoc = buttonParser.parseFromString(
        updatedtoolhtml,
        'text/html'
      );
      const buttonElement = buttonDoc.body.firstChild as HTMLElement;
      parentContainer.appendChild(buttonElement);
      this.rawhtml = doc.documentElement.outerHTML;
      this.modifiedHtml.emit(this.rawhtml);
    }
  }
}
