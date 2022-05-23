import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: AngularFireAuth, private router: Router) {
    this.userGuard$ = this.auth.authState.pipe(
      switchMap((user) => {
        if (user) {
          this.user = user
          return of(true);
        } else {
          this.router.navigate(['/products']);
          return of(false);
        }
      })
    );
  }
  userGuard$: Observable<boolean>;
  user: firebase.User | null;

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
        if (result.user) {
          // const credential = result.credential;
          // const operationType = result.operationType;
          this.user = result.user;
        }
      },
      // reject
      (err) => {
        console.error(err);
      }
    );
  }
}
