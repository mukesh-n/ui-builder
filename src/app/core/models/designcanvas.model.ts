export class DynamicStyle {
    id: string = '';
    classname: Array<htmlclass> = new Array<htmlclass>();
    styles: Array<{ [key: string]: string }> = [];
  }
  
  export class ToolSet {
    toolset: DynamicStyle = new DynamicStyle();
  }
  
  export class htmlclass {
    class: string = '';
  }
  export class HtmlElement {
    tag: string = '';
    id?: string = '';
    children?: HtmlElement[];
    collapsed?: boolean;
    level: number = 0;
  }
  
  export enum ToolBox {
    Button = 'Button',
  }
  
  export class ToolBoxSettings {
    name: string = '';
    colour: string = '';
    size: string = '';
  }
  