import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appCpfFormat',
  standalone: true,
})
export class CpfFormatPipe implements PipeTransform {
  transform(value: string): string {
    const cleaned = value.replace(/\D/g, '');

    const part1 = cleaned.slice(0, 3);
    const part2 = cleaned.slice(3, 6);
    const part3 = cleaned.slice(6, 9);
    const part4 = cleaned.slice(9, 11);

    return `${part1}.${part2}.${part3}-${part4}`;
  }
}
