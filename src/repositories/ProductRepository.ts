import { EntityRepository, Repository } from 'typeorm';

import { T_ITEM1 } from '../models/T_ITEM1';

@EntityRepository(T_ITEM1)
export class ProductRepository extends Repository<T_ITEM1>  {

}
