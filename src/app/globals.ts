import { Injectable } from '@angular/core';
import { AuthenticatedUser } from './AuthenticatedUser';

@Injectable()
export class Globals {
  authenticatedUser: AuthenticatedUser;
  baseRestUrl: string = 'http://bcontrolservicesboot-test.us-west-2.elasticbeanstalk.com:8080';

}