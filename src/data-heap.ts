import {FindRequest, HeapIndex, IDataHeap, PrimaryKey} from "./types";


export class DataHeap<DataType> implements IDataHeap<DataType> {

  private data: DataType[] = [];

  private indexMap: {[propertyPath: string]: any} = {};

  public initialize(
    data: DataType[],
    indexes: HeapIndex[],
    primaryKeys: PrimaryKey<DataType>[]
  ): void {
    this.data = data;
    for (let i = 0; i < data.length; i++) {
      for (let k = 0; k < indexes.length; k++) {
        this.indexMap[indexes[k]]
      }
    }
  }

  public findItems<V>(req: FindRequest<V> | FindRequest<V>[]): DataType[] {

  }

}