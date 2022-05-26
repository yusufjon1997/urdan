import _ from 'lodash';

export const paginate = (totalPosts, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  console.log('paginate function runs')
  return _(totalPosts).slice(startIndex).take(pageSize).value();
};