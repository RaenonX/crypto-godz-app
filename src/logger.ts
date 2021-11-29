import {RewardData} from './data/rewards';


export class Logger {
  enabled: boolean;

  constructor() {
    this.enabled = true;
  }

  private log(category: string, message?: string): void {
    if (!this.enabled) {
      return;
    }

    console.log(`[${category.padStart(4)}] ${message || ''}`);
  }

  message(message?: string): void {
    this.log('MISC', message);
  }

  unitPulled(godz: number, power: number): void {
    this.log('UNIT', `Spent ${godz.toFixed(2)} GODZ / WP +${power.toFixed(2)}`);
  }

  battle(reward: RewardData | null): void {
    this.log(
      'BATL',
      !!reward ?
        `Battle WON!' (WR ${reward.winRatePct.toFixed(0)}%) / Earned $${reward.rewards} USD` :
        'Battle LOST...',
    );
  }

  badgePulled(count: number, badgePriceUsd: number): void {
    this.log('BAGE', `Pulled ${count} badges (spent USD $${badgePriceUsd})`);
  }

  vitalRecovered(costUsd: number): void {
    this.log('VITL', `Recovered vital of a sentz (spent USD $${costUsd})`);
  }
}
