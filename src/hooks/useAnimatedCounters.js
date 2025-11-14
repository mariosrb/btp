import { useEffect, useMemo, useState } from 'react';
import { animateValue } from '../utils/animation';
import { formatCounterValue } from '../utils/formatting';

const useAnimatedCounters = (counters = [], options = {}) => {
  const { active = false } = options;
  const config = useMemo(
    () =>
      counters.map((counter) => ({
        target: counter.target ?? 0,
        duration: counter.duration ?? 2000,
        suffix: counter.suffix ?? '',
        prefix: counter.prefix ?? '',
      })),
    [counters]
  );

  const [values, setValues] = useState(() =>
    config.map((counter) =>
      formatCounterValue(0, { prefix: counter.prefix, suffix: counter.suffix })
    )
  );

  useEffect(() => {
    if (!active || config.length === 0) {
      return undefined;
    }

    const cancelers = config.map((counter, index) =>
      animateValue({
        from: 0,
        to: counter.target,
        duration: counter.duration,
        onUpdate: (value) => {
          setValues((prev) => {
            const next = [...prev];
            next[index] = formatCounterValue(value, {
              prefix: counter.prefix,
              suffix: counter.suffix,
            });
            return next;
          });
        },
      })
    );

    return () => cancelers.forEach((cancel) => cancel && cancel());
  }, [active, config]);

  return values;
};

export default useAnimatedCounters;

