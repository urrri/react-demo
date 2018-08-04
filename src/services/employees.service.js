import request from 'utils/request';

export function query({sort}) {
  const query = `_sort=last_name&_order=${sort ? 'asc' : 'desc'}`;

  return request(`${process.env.server}/employees?${query}`);
}
