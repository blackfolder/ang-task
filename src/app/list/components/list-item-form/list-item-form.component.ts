import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ListItemService } from '../../services/list-item.service';

@Component({
  selector: 'app-list-item-form',
  templateUrl: './list-item-form.component.html',
  styleUrls: ['./list-item-form.component.scss']
})
export class ListItemFormComponent {
  @Input() currentUserId: number;

  listItemForm = this.fb.group({
    title: [''],
    content: [''],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly listItemService: ListItemService,
  ) { }

  onSubmit(): void {
    this.listItemService.addItem(this.currentUserId, this.listItemForm.getRawValue());
    this.listItemForm.patchValue({ title: null, content: null });
  }
}
