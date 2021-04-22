import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SortHeaderComponent } from '../../../shared/sort/sort-header/sort-header.component';
import { SortDirective } from '../../../shared/sort/sort.directive';
import { ListService } from '../../services/list.service';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let listServiceSpy: jasmine.SpyObj<ListService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ListComponent,
        SortDirective,
        SortHeaderComponent,
      ],
      providers: [
        {
          provide: ListService, useValue: jasmine.createSpyObj<ListService>('ListService', [
            'setUserItemsSort',
            'getSortedUserItems',
            'getCurrentSort',
            'loadUserItems',
          ]),
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    listServiceSpy = TestBed.inject(ListService) as jasmine.SpyObj<ListService>;
    listServiceSpy.getSortedUserItems.and.returnValue(of([
      {
        id: 1,
        title: 'some_title',
        content: 'some_content',
      },
    ]));

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set sort on sort change', () => {
    const testSort = { columnName: 'some_column', direction: 'asc' };

    component.onColumnSorted(testSort);

    expect(TestBed.inject(ListService).setUserItemsSort).toHaveBeenCalledWith('asc', 'some_column');
  });

  it('should load user items on current user id input change', () => {
    component.currentUserId = 109;

    expect(TestBed.inject(ListService).loadUserItems).toHaveBeenCalledWith(109);
  });

  it('should show table items', () => {
    expect(fixture.nativeElement.querySelector('tr').textContent).toContain(1);
    expect(fixture.nativeElement.querySelector('tr').textContent).toContain('some_title');
    expect(fixture.nativeElement.querySelector('tr').textContent).toContain('some_content');
  });
});
