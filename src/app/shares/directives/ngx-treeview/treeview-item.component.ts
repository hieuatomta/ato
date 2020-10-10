import {Component, EventEmitter, Input, Output, TemplateRef} from '@angular/core';
import {isNil} from 'lodash';
import {TreeviewItem} from './treeview-item';
import {TreeviewConfig} from './treeview-config';
import {TreeviewItemTemplateContext} from './treeview-item-template-context';

@Component({
  selector: 'ngx-treeview-item',
  templateUrl: './treeview-item.component.html',
  styleUrls: ['./treeview-item.component.scss']
})
export class TreeviewItemComponent {
  @Input() config: TreeviewConfig;
  @Input() template: TemplateRef<TreeviewItemTemplateContext>;
  @Input() item: TreeviewItem;
  @Output() checkedChange = new EventEmitter<boolean>();
  @Output() dropChange = new EventEmitter<any>();

  constructor(
    private defaultConfig: TreeviewConfig
  ) {
    this.config = this.defaultConfig;
  }

  onCollapseExpand = () => {
    this.item.collapsed = !this.item.collapsed;
  }

  onCheckedChange = () => {
    const checked = this.item.checked;
    if (!isNil(this.item.children) && !this.config.decoupleChildFromParent) {
      this.item.children.forEach(child => child.setCheckedRecursive(checked));
    }
    this.checkedChange.emit(checked);
  }
  @Input() hasDrag: boolean;

  onChildCheckedChange(child: TreeviewItem, checked: boolean) {
    if (!this.config.decoupleChildFromParent) {
      let itemChecked: boolean = null;
      for (const childItem of this.item.children) {
        if (itemChecked === null) {
          itemChecked = childItem.checked;
        } else if (itemChecked !== childItem.checked) {
          itemChecked = undefined;
          break;
        }
      }

      if (itemChecked === null) {
        itemChecked = false;
      }

      if (this.item.checked !== itemChecked) {
        this.item.checked = itemChecked;
      }

    }

    this.checkedChange.emit(checked);
  }

  drop(event: any) {
    if (event.container.data  === event.item.data || !event.container.data) return
    else {
      const data = {
        dragData: event.item.data.value,
        dropListData: event.container.data.value
      }
      this.dropChange.emit(data)
    }
  }

  onDrop($event: any) {
    this.dropChange.emit($event)
  }
}
