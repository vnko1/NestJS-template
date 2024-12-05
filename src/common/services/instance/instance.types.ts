
// ! SEQUELIZE
// export interface InstanceInterface<T> {
//   add(data: any, opt?: CreateOptions): Promise<T>;

//   edit<T extends object>(
//     data: T,
//     opt: UpdateOptions,
//   ): Promise<[affectedCount: number]>;

//   delete(opt: DestroyOptions): Promise<number>;

//   findByPk<M extends string | number>(pk: M, opt?: FindOptions): Promise<T>;

//   findOne(opt?: FindOptions): Promise<T>;

//   findAll(opt?: FindOptions): Promise<T[]>;

//   findAndCountAll(opt?: Omit<FindAndCountOptions<any>, 'group'>): Promise<{
//     rows: T[];
//     count: number;
//   }>;
// }



// ! TYPEORM

// export type CriteriaType<T> =
//   | string
//   | number
//   | Date
//   | ObjectId
//   | FindOptionsWhere<T>
//   | string[]
//   | number[]
//   | Date[]
//   | ObjectId[];

// export type EntityType<T> = QueryDeepPartialEntity<T>;

// export interface InstanceInterface<T> {
//   findOne(opt: FindOptionsWhere<T> | FindOptionsWhere<T>[]): Promise<T>;

//   findAll(opt?: FindManyOptions): Promise<T[]>;

//   findAllAndCount(
//     where: FindOptionsWhere<T> | FindOptionsWhere<T>[]
//   ): Promise<[T[], number]>;

//   create(data: T): T;

//   update(
//     criteria: CriteriaType<T>,
//     entity: EntityType<T>
//   ): Promise<UpdateResult>;

//   delete(criteria: CriteriaType<T>): Promise<DeleteResult>;

//   softDelete(criteria: CriteriaType<T>): Promise<DeleteResult>;

//   restore(criteria: CriteriaType<T>): Promise<UpdateResult>;
// }
