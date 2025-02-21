import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDateFormat'
})
export class CustomDateFormatPipe implements PipeTransform {

  transform(value: string | Date, format: string = 'DD/MM/YYYY'): string {
    if (!value) return value as string;

    const date = new Date(value);
    
    // Format the date according to the 'DD-MM-YYYY' format
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // months are zero-based
    const year = date.getFullYear();

    // Return formatted date as a string
    if (format === 'DD/MM/YYYY') {
      return `${day}/${month}/${year}`;
    }
    
    // Handle other formats as necessary
    return value as string;
  }
}
