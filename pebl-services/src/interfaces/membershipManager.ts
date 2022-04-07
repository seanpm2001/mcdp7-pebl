/*

Copyright 2021 Eduworks Corporation

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

import { PeBLPlugin } from "../models/peblPlugin";

export interface MembershipManager extends PeBLPlugin {

  // validateGetMemberships(payload: { [key: string]: any }): boolean;
  // validateSaveMemberships(payload: { [key: string]: any }): boolean;
  // validateDeleteMembership(payload: { [key: string]: any }): boolean;

  // getMemberships(identity: string, callback: ((memberships: Membership[]) => void)): void;
  // saveMemberships(identity: string, memberships: Membership[], callback: ((success: boolean) => void)): void;
  // deleteMembership(identity: string, id: string, callback: ((success: boolean) => void)): void;
}
