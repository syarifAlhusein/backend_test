import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Categories } from "./categories"; // Pastikan path ini benar

@Table({
  tableName: Product.PRODUCT_TABLE_NAME,
})
export class Product extends Model {
  public static PRODUCT_TABLE_NAME = "product" as string;
  public static PRODUCT_ID = "id" as string;
  public static PRODUCT_NAME = "name" as string;
  public static PRODUCT_DESCRIPTION = "description" as string;
  public static PRODUCT_IMAGE = "image" as string;
  public static CATEGORY_ID = "category_id" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: Product.PRODUCT_ID,
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    field: Product.PRODUCT_NAME,
  })
  name!: string;

  @Column({
    type: DataType.STRING(255),
    field: Product.PRODUCT_DESCRIPTION,
  })
  description!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: Product.PRODUCT_IMAGE,
  })
  image!: string;

  @ForeignKey(() => Categories)
  @Column({
    type: DataType.INTEGER,
    field: Product.CATEGORY_ID,
  })
  category_id!: number;

  @BelongsTo(() => Categories)
  category!: Categories;
}
