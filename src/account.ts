import {ElanVital} from './data/vital';
import {Logger} from './logger';
import {runSingleBattle} from './pool/battle';
import {pullSingleSentz} from './pool/sentz';
import {AccountStatus} from './types/account';
import {GamePrices} from './types/params';
import {Sentz} from './types/sentz';


type AccountInitOpts = AccountStatus;

export class Account implements AccountStatus {
  readonly godz: {
    owned: number,
    price: number,
  };

  readonly assets: {
    readonly sentz: Sentz[],
    badge: number,
  };

  readonly log: Logger;

  constructor({godz, assets}: AccountInitOpts) {
    this.godz = godz;
    this.assets = assets;
    this.log = new Logger();
  }

  get totalWillPower(): number {
    return this.assets.sentz
      .map((sentz) => sentz.willPower)
      .reduce((prev, curr) => prev + curr);
  }

  get badgesNeeded(): number {
    return this.assets.sentz.length - this.assets.badge;
  }

  get strGodzAsset(): string {
    return `GODZ: ${this.godz.owned.toFixed(2)} (USD $${(this.godz.owned * this.godz.price).toFixed(2)})`;
  }

  pullBadge(prices: GamePrices, count: number): void {
    this.godz.owned -= (prices.badge / this.godz.price) * count;
    this.assets.badge += count;

    this.log.badgePulled(count, prices.badge);
  }

  pullUnits(prices: GamePrices, count: number): void {
    const godzSpent = prices.sentz / this.godz.price;

    for (let _ = 0; _ < count; _++) {
      const pulled = pullSingleSentz();

      this.godz.owned -= godzSpent;
      this.assets.sentz.push(pulled);

      this.log.unitPulled(godzSpent, pulled.willPower);
    }
  }

  recoverVital(): void {
    // TODO: Might not want to recover vital for worse units
    const vitalRecoverSolution = ElanVital
      .map((vital) => ({
        ...vital,
        costPerDay: vital.costPerSentz / vital.durationDays,
      }))
      .reduce((prev, current) => (
        (prev.costPerDay < current.costPerDay) ? prev : current
      ));

    this.assets.sentz.forEach((sentz, idx, arr) => {
      if (sentz.vitalDays > 0) {
        return;
      }

      arr[idx] = {
        ...sentz,
        vitalDays: sentz.vitalDays += vitalRecoverSolution.durationDays,
      };

      this.godz.owned -= vitalRecoverSolution.costPerSentz / this.godz.price;

      this.log.vitalRecovered(vitalRecoverSolution.costPerSentz);
    });
  }

  battle(prices: GamePrices): void {
    // TODO: Might not want to equip badges and recover vital for worse units
    this.pullBadge(prices, this.badgesNeeded);
    this.recoverVital();

    const reward = runSingleBattle(this);

    this.log.battle(reward);

    if (!reward) {
      return;
    }

    this.godz.owned += reward.rewards / this.godz.price;
  }

  dayPass(): void {
    // Vital reduces
    this.assets.sentz.forEach((sentz) => {
      sentz.vitalDays -= 1;
    });
  }

  printStatus(): void {
    this.log.message(`  Own ${this.strGodzAsset}`);
    this.log.message(`  Total Will Power: ${this.totalWillPower.toFixed(2)}`);
  }

  copy(): Account {
    return new Account({
      godz: JSON.parse(JSON.stringify(this.godz)),
      assets: JSON.parse(JSON.stringify(this.assets)),
    });
  }
}
