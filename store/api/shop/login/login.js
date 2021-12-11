import { ajaxManager } from '@/plugins/axios';

export default ajaxManager.create({
  name: `SHOP LOGIN`,
  defaultValue: {},
  axiosConfig: {
    method: 'post',
    url: '/v1/shop/auth/sign_in',
  },
});
