import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: AngularFireAuth) {}

  user: firebase.User | null;
  test() {}
  show() {
    console.log(this.user);
  }
  loginStateObs() {
    return this.auth.authState;
  }

  loginGoogle() {
    console.log(`google`);
    this.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  loginFacebook() {
    console.log(`facebook`);
    this.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
  }
  loginGitHub() {
    console.log(`git`);
    this.auth.signInWithRedirect(new firebase.auth.GithubAuthProvider());
  }

  logout() {
    this.auth.signOut();
    this.user = null;
    this.checkUser();
  }

  checkUser() {
    this.auth.getRedirectResult().then(
      // resolve
      (result) => {
        console.log(result.user)
        if (result.user) {
          // const credential = result.credential;
          // const operationType = result.operationType;
          console.log(result)
          this.user = result.user;
        }
      },
      // reject
      (err) => {
        console.log(err);
        
      }
    );
  }
}
