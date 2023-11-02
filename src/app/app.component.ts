import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Animal } from './animal';
import { animals } from './animals';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  animals = animals;

  displayAnimal = animals;

  animalFormGroup: FormGroup;

  _subscription = new Subscription();

  constructor(protected fb: FormBuilder) {
    this.animalFormGroup = this.fb.group({
      sortBy: [''],
      animalType: ['showAll'],
    });
  }

  ngOnInit() {
    this._subscription.add(
      this.animalFormGroup.valueChanges.subscribe((v) => {
        console.log(v);
        if (v.animalType) {
          this.displayAnimal =
            v.animalType === 'showAll'
              ? this.animals
              : this.animals.filter((x) => x.type === +v.animalType);
        }
        if (v.sortBy) {
          this.displayAnimal = this.displayAnimal.sort(
            this.dynamicSort(v.sortBy)
          );
        }
      })
    );
  }

  ngOnDestroy() {
    this._subscription?.unsubscribe();
  }

  groupByAnimalType() {
    this.animalFormGroup.patchValue({ animalType: 'showAll' });
    this.displayAnimal = this.animals.sort(this.dynamicSort('type'));
  }

  dynamicSort(prop: string) {
    return function (a: Animal, b: Animal) {
      if (a[prop] < b[prop]) {
        return -1;
      }
      if (a[prop] < b[prop]) {
        return 1;
      }
      return 0;
    };
  }
}
