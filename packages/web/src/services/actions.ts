export declare namespace Actions {
  /**
   * @alias P Props
   * @alias R Return
   */
  export interface IReadOne<P, R> {
    readOne(props: P): Promise<R>;
  }

  /**
   * @alias P Props
   * @alias R Return
   */
  export interface IReadMany<P, R> {
    readMany(props: P): Promise<R>;
  }
}
