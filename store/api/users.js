import { vueAjaxManager as ajaxManager } from '@/plugins/axios';

export default ajaxManager.create({
  name: `USERS DETAIL`,
  defaultValue: {},
  axiosConfig: {
    method: 'get',
    url: '/v1/users/{id}',
  },
  handlers: {
    combineParams({ id, ...data }, { url, ...axiosConfig }) {
      return { ...axiosConfig, url: url.replace('{id}', id), data };
    },
  },
});
