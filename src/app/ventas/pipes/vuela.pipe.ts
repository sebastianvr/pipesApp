import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform {

    transform(queHace: boolean): string {

        return queHace
            ? 'vuela'
            : 'no vuela'

    }
}