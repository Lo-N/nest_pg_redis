import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor() {}

  async signIn() {
    return 'signIn'
  }

  async signUp() {
    return 'signUp'
  }

  async resetPassword() {
    return 'resetPassword'
  }
}
