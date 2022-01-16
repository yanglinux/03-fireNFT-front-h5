import { vueAjaxManager as ajaxManager } from '@/plugins/axios';

export default ajaxManager.create({
  name: `MY CREDIT CARD REGISTER PAYOUT`,
  defaultValue: {},
  axiosConfig: {
    method: 'post',
    url: '/v1/my/credit_card/payout',
  },
});
