import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'visibleColumns',
})
export class VisibleColumnsPipe implements PipeTransform {
  transform(
    columns: Array<{ name: string; hidden: boolean }>,
    ...args: unknown[]
  ): unknown {
    return columns.filter(col => !col.hidden);
  }
}
