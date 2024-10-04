import { Model, Table, Column, DataType, HasMany } from "sequelize-typescript";
import { Product } from "./product";

@Table({
  tableName: Categories.CATEGORIES_TABLE_NAME,
})
export class Categories extends Model {
  public static CATEGORIES_TABLE_NAME = "categories" as string;
  public static CATEGORIES_ID = "id" as string;
  public static CATEGORIES_NAME = "name" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: Categories.CATEGORIES_ID,
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    field: Categories.CATEGORIES_NAME,
  })
  name!: string;

  @HasMany(() => Product)
  products!: Product[];
}
