import { Component, OnInit, VERSION } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  string = new FormControl('', Validators.required);
  isValid: boolean;
  isChecked = false;

  checkValidity() {
    this.isChecked = true;
    if (this.validParanthesis()) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  }

  validParanthesis() {
    let stack = [];

    for (let i = 0; i < this.string.value.length; i++) {
      let x = this.string.value[i];

      if (x == '(' || x == '[' || x == '{') {
        stack.push(x);
        continue;
      }

      if (stack.length == 0) return false;

      let check;
      switch (x) {
        case ')':
          check = stack.pop();
          if (check == '{' || check == '[') return false;
          break;

        case '}':
          check = stack.pop();
          if (check == '(' || check == '[') return false;
          break;

        case ']':
          check = stack.pop();
          if (check == '(' || check == '{') return false;
          break;
      }
    }
    return stack.length == 0;
  }
}
