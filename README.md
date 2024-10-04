# API Documentation For Backend Test

## A. Product

### Base URL
``http://localhost:8000/api/v1/product``

### 1. Create Product
- ### Method: ``POST``
- ### URL: ``/product``
- ### Description: ``Create a new product with an image.``
- ### Request Body:
- name: ``(string, required)``
- description: ``(string, required)``
- category_id: ``(integer, required)``
- image: ``(file, required)``
- Response: ``status: Created`` ``message: Successfully added product!``

## 2. Update Product
### Method: ``PATCH``
### URL: ``/product/:id``
### Description: ``Update product details (with an optional image update).``
### Request Body:
- name: ``(string, optional)``
- description: ``(string, optional``
- category_id: ``(integer, optional)``
- image: ``(file, optional)``
- Response: ``status: Ok`` ``message: Successfully updated product data!``

## 3. Delete Product
- ### Method: ``DELETE``
- ### URL: ``/product/:id``
- ### Description: ``Delete a specific product by ID.``
- ### Response: ``status: Ok`` ``message: Successfully deleted product!``

## 4. Delete All Products
- ### Method: ``DELETE``
- ### URL: ``/product``
- ### Description: ``Delete all products.``
- ### Response: ``status: Ok`` ``message: Successfully deleted all products!``

## 5. Get All Products
- ## Method: ``GET``
- ## URL: ``/product``
- ## Description: ``Retrieve all products.``
- ## Response: ``status: Ok`` ``data: List of products``

## 6. Get Product by ID
- ## Method: ``GET``
- ## URL: ``/product/:id``
- ## Description: ``Retrieve a product by ID.``
- ## Response: ``status: Ok`` ``data: Product details``

## B. Category

### Base URL
``http://localhost:8000/api/v1/categories``

### 1. Create Categories
- ### Method: ``POST``
- ### URL: ``/categories``
- ### Description: ``Create a new category with an image.``
- ### Request Body:
- name: ``(string, required)``
- Response: ``status: Created`` ``message: Successfully added category!``

## 2. Update Categories
### Method: ``PATCH``
### URL: ``/categories/:id``
### Description: ``Update category details.``
### Request Body:
- name: ``(string, optional)``
- Response: ``status: Ok`` ``message: Successfully updated category data!``

## 3. Delete Categories
- ### Method: ``DELETE``
- ### URL: ``/categories/:id``
- ### Description: ``Delete a specific category by ID.``
- ### Response: ``status: Ok`` ``message: Successfully deleted category!``

## 4. Delete All Categories
- ### Method: ``DELETE``
- ### URL: ``/categories``
- ### Description: ``Delete all categories.``
- ### Response: ``status: Ok`` ``message: Successfully deleted all categories!``

## 5. Get All Categories
- ## Method: ``GET``
- ## URL: ``/categories``
- ## Description: ``Retrieve all categories.``
- ## Response: ``status: Ok`` ``data: List of categories``

## 6. Get Categories by ID
- ## Method: ``GET``
- ## URL: ``/categories/:id``
- ## Description: ``Retrieve a category by ID.``
- ## Response: ``status: Ok`` ``data: Category details``








