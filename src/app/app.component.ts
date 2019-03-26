import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  treeData = [
    {
      id: 1,
      text: 'Item1',
      children: [
        {
          id: '1.1',
          text: 'Item1.1',
          children: [
            {
              id: '1.1.1',
              text: 'Item1.1.1',
              children: [
                {
                  id: '1.1.1.1',
                  text: 'Item1.1.1.1',
                }
              ]
            }
          ]
        },
        {
          id: '1.2',
          text: 'Item1.2'
        },
        {
          id: '1.3',
          text: 'Item1.3',
          children: [
            {
              id: '1.3.1',
              text: 'Item1.3.1',
            }
          ]
        }
      ]
    },
    {
      id: '2',
      text: 'Item2',
      children: [
        {
          id: '2.1',
          text: 'Item2.1'
        },
        {
          id: '2.2',
          text: 'Item2.2'
        },
        {
          id: '2.3',
          text: 'Item2.3',
          children: [
            {
              id: '2.3.1',
              text: 'Item2.3.1'
            }
          ]
        }
      ]
    }

  ];

  name = 'Angular';
}
