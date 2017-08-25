export const TICK = 'TIMER_TICK';
const START_TIME_STAMP = 1464220800000;

export function timerTick() {
  return {
    type: TICK,
    data: {
      time: Date.now() - START_TIME_STAMP
    }
  };
}
