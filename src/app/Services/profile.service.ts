import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private auth: AuthService) {}
  buttonsMock = [
    {
      color: 'black',
      name: 'GitHub',
      image:
        'https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png',
    },
    {
      color: 'white',
      name: 'Google',
      image:
        'http://castironsteak.com/wp-content/uploads/2016/01/google-square.jpg',
    },
    {
      color: 'blue',
      name: 'Facebook',
      image:
        'https://icons-for-free.com/iconfiles/png/512/facebook+high+quality+media+social+social+media+square+icon-1320192615308993674.png',
    },
  ];
  handleLogin(handler: string) {
    switch (handler) {
      case 'GitHub':
        console.log(`git`);
        this.auth.loginGitHub();
        break;
      case 'Google':
        this.auth.loginGoogle();
        break;
      case 'Facebook':
        this.auth.loginFacebook();
        break;
      default:
        return;
    }
  }
  styles = {
    modal: {
      isClosed: true,
      userProfileModal: true,
    },
  };
 
  toggleProfileModal() {
    this.styles.modal.isClosed = !this.styles.modal.isClosed;
  }
}
