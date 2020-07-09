export interface LatencyProps {
  latencyInMS?: number;
}

/**
 * @name Latency
 */
export function Latency(props?: LatencyProps) {
  const { latencyInMS = 500 } = props || {};
  return function(
    target: Object,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<any>
  ): any {
    let originalMethod = descriptor.value;

    descriptor.value = function Timeout(...args: any) {
      return new Promise(async (resolve, reject) => {
        try {
          const result = await originalMethod.apply(this, args);
          if (!result) {
            resolve(undefined);
          }
          setTimeout(() => {
            resolve(result);
          }, latencyInMS);
        } catch (error) {
          setTimeout(() => {
            reject(error);
          }, latencyInMS);
        }
      });
    };

    return descriptor;
  };
}
