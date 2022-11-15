import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    
    { title: 'Perfil', url: '/profile', icon: 'person' },
    { title: 'Llamar', url: '/calling', icon: 'call' },
    { title: 'Localizame', url: '/localizame', icon: 'location' },
    { title: 'Restablecer Contraseña', url: '/passwordreset', icon: 'refresh-circle' },
    { title: 'Logout', url:'/home/logout()' , icon: 'person' }
  ];
  constructor() {}
}

 
