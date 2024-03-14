import { Component } from '@angular/core';
import { StoreService } from 'src/app/store.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  constructor(private readonly storeService: StoreService) {}

  onFilterChange(event: Event){
    const element = event.currentTarget as HTMLInputElement
    const value = element.value
    this.storeService.updateFilter(value)
  }

  onSortingChange(event: Event){
    const element = event.currentTarget as HTMLInputElement
    const value = element.value
    this.storeService.updateSort(value)
  }
}
