import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telFormat'
})
export class TelFormatPipe implements PipeTransform {

  transform(str: string): string {
    let out: string = ''
    if(str.trim()) {
      if (str[0] != '+') {
        out = '+38('
        return out+str
      }
    }
    let buf = ''
    if(str.length > 7 && str[7] != ')')
    {
      for(let i = 0; i < str.length; ++i ){
        if (i >= 7) buf+=str[i]
        else if (i < 7) out+=str[i]
      }
      return out = out + ')' + buf
    }

    if(str.length > 10 && str[10] != '-')
    {
      for(let i = 0; i < str.length; ++i ){
        if (i >= 10) buf+=str[i]
        else if (i < 10) out+=str[i]
      }
      return out + '-' + buf
    }

    if(str.length > 13 && str[13] != '-')
    {
      for(let i = 0; i < str.length; ++i ){
        if (i >= 13) buf+=str[i]
        else if (i < 13) out+=str[i]
      }
      return out + '-' + buf
    }

    return str;
  }

}
