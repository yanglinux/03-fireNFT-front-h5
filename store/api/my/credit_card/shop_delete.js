import { vueAjaxManager as ajaxManager } from '@/plugins/axios';

export default ajaxManager.create({
  name: `MY CREDIT CARD DELETE PAYOUT`,
  defaultValue: {},
  axiosConfig: {
    method: 'delete',
    url: '/v1/my/credit_card/payout',
  },
});
