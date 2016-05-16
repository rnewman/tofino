/**
* This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a
* copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
*/

/* eslint no-console: 0 */

import FB from 'fb';

FB.setAccessToken('user_access_token_here');

export function feed() {
  return new Promise((resolve, reject) => {
    FB.api('/me/feed', res => {
      if (!res) {
        reject(new Error('No Facebook response.'));
        return;
      }

      if (res.error) {
        reject(res.error);
        return;
      }

      console.log(JSON.stringify(res));
      resolve(res);
    });
  });
}

