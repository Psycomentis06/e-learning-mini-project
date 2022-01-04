import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionFormatter'
})
export class DescriptionFormatterPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
     var entityMap: any = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': '&quot;',
            "'": '&#39;',
            "/": '&#x2F;'
          };
        
    if (value.startsWith("$code")) {
      value = value.replace("$code", "")
      return String(value).replace(/[&<>"'\/]/g, function (s) {
        return entityMap[s];
      });
    }
    return value;
  }

}
