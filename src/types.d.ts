

export interface IDataHeap<DataType> {

  initialize(
    data: DataType[],
    indexes: HeapIndex[],
    primaryKeys: PrimaryKey<DataType>[]
  ): void;

  findItems<V>(req: FindRequest<V> | FindRequest<V>[]): DataType[];

}

export type HeapIndex = {
  propertyPath: string;
};

export type PrimaryKey<DataType> = {
  propertyPath: string | PrimaryKeyFn<DataType>;
};

export type PrimaryKeyFn<DataType> = (item: DataType) => string;

export type FindRequest<V> = {
  index: HeapIndex;
  findValue: V | FindValueFn<V>;
};

export type FindValueFn<Value> = (val: Value, index?: HeapIndex) => boolean;
