import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ListItemService } from '../../services/list-item.service';

import { ListItemFormComponent } from './list-item-form.component';

describe('ListItemFormComponent', () => {
  let component: ListItemFormComponent;
  let fixture: ComponentFixture<ListItemFormComponent>;
  const USER_ID = 1337;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [ListItemFormComponent],
      providers: [
        {
          provide: ListItemService,
          useValue: jasmine.createSpyObj<ListItemService>('ListItemService', ['addItem']),
        },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemFormComponent);
    component = fixture.componentInstance;
    component.currentUserId = USER_ID;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset form on submit', () => {
    component.listItemForm.controls['title'].setValue('some_title');
    component.listItemForm.controls['content'].setValue('some_content');

    fixture.debugElement.query(By.css('form')).triggerEventHandler('submit', null);
    fixture.detectChanges();

    expect(component.listItemForm.getRawValue()).toEqual({ title: null, content: null });
  });

  it('should add item with title and content on form submit', () => {
    component.listItemForm.controls['title'].setValue('some_title');
    component.listItemForm.controls['content'].setValue('some_content');

    fixture.debugElement.query(By.css('form')).triggerEventHandler('submit', null);
    fixture.detectChanges();

    expect(TestBed.inject(ListItemService).addItem).toHaveBeenCalledWith(USER_ID, { title: 'some_title', content: 'some_content' });
  });

  it('should add item with title and content on form submit when current user is is changed', () => {
    component.listItemForm.controls['title'].setValue('some_title');
    component.listItemForm.controls['content'].setValue('some_content');
    component.currentUserId = 909090;

    fixture.debugElement.query(By.css('form')).triggerEventHandler('submit', null);
    fixture.detectChanges();

    expect(TestBed.inject(ListItemService).addItem).toHaveBeenCalledWith(909090, { title: 'some_title', content: 'some_content' });
  });
});
