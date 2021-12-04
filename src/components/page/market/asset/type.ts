import {AccountStatus} from '../../../../calc/types/account';


export type AssetProps = {
  account: AccountStatus,
  setAccount: (newStatus: AccountStatus) => void,
};
