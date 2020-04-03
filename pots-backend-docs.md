# Purchase Order Tracking System Backend Documentation

## Data Model

* Purchase Order
    * id
    * purchaseOrderNo
    * shipment No
    * adminStatus
    * supplierStatusHeader
    * postingDate
    * documentDate
    * vendorAddress (Address)
        * id
        * building_name
        * street
        * city
        * state
        * zip_code
    * Supplier
        * id
        * supplierNo
        * supplierName
        * tin
        * contactPerson
        * contactNumber
        * address (Address)
            * id
            * building_name
            * street
            * city
            * state
            * zip_code
    * Items
        * id
        * itemNo
        * productId
        * description
        * quantity 
        * uom
        * unitPrice
        * totalAmount
        * discount
        * supplierStatusItem
        * currency
        * dateUpdated
        * timeUpdated
        * deliveryAddress (Address)
            * id
            * building_name
            * street
            * city
            * state
            * zip_code
        * scheduleLine (Schedule Line)
            * id
            * quantity
            * uom
            * unitPrice
            * totalAmount
            * deliveryDateAndTime
            * deliveryStatus (Supplier Status)
                * id
                * status
                * dateCreated
                * timeCreated


## Use Cases

## Admin

### The Admin should be able to Read, Update, and Delete Purchase Orders.

* Read

The Admin can Read Purchase Orders using the following GQL queries: 

1. purchaseOrder - used to read a single Purchase Order. This query takes the ID of the Purchase Order as a parameter.

``` 
purchaseOrder(id: ID!): PurchaseOrder
```

2. allPurchaseOrders - used to read all Purchase Orders.

```
allPurchaseOrders: [PurchaseOrder]
```

3. purchaseOrdersStatus - used to read Purchase Orders by status. This query takes status as a parameter in order to filter the Purchase Orders.

```
 purchaseOrdersStatus(status: String): [PurchaseOrder]
```

</br>

* Update

The Admin can Update Purchase Orders using the following GQL 
mutations:

1. updatePurchaseOrder - used to update the fields of a Purchase Order. The mutation queries a specific purchase order using its ID.  

```
updatePurchaseOrder(purchaseOrder: UpdatePurchaseOrderInput): PurchaseOrder

input UpdatePurchaseOrderInput {
    id: ID!
    purchaseOrderNo: String
    shipmentNo: String
    adminStatus: String
    supplierStatusHeader: String
    documentDate: String
    postingDate: String
    }
```

2. updateAdminStatus - used to update a the adminStatus field (Recieved/Pending) of a Purchase Order. The ID of the Purchase Order is used to query a single Purchase Order, and the mutation accepts adminStatus as a parameter. 

```
updateAdminStatus(purchaseOrder: UpdateAdminStatusInput): PurchaseOrder

input UpdateAdminStatusInput {
    id: ID!
    adminStatus: String!
    }
```

</br>

* Delete

The Admin can Delete Purchase Orders using the following GQL mutation:

1. deletePurchaseOrder - used to delete a Purchase Order from the database. It accepts the ID of a Purchase Order as a parameter in order to query the specific Purchase Order to be deleted.

```
 deletePurchaseOrder(id: ID!): PurchaseOrder
```

</br>

## Supplier

### 1. The Supplier should be able to view purchase orders.

1. purchaseOrderSupplier - used to read a single Purchase Order as a supplier. This query takes the ID of the Purchase Order as a parameter.

```
purchaseOrderSupplier(id: ID!): PurchaseOrder
```

2. allPurchaseOrders - used to read all Purchase Orders as a supplier.

```
supplierAllPurchaseOrders: [PurchaseOrder]
```

### 2. The Supplier should be able to view a summary of purchase orders by status.

1. purchaseOrdersStatus - used to read Purchase Orders by status as a supplier. This query takes status as a parameter in order to filter the Purchase Orders.

```
supplierPurchaseOrdersByStatus
```

### 3. The Supplier should be able to update an Item's status (shipped/delivered/pending/queued).

1. updateSupplierStatusItem - used to update an item's status (supplierStatusItem) as a supplier. The mutation takes an item's ID to query a specific item. The mutation also accepts the supplierStatusItem field as a parameter.

```
supplierPurchaseOrdersByStatus(status: String): [PurchaseOrder]
```

### 4. The Supplier should be able to update their profile.

1. updateSupplier - used to update a Supplier's details. The mutation queries a specific supplier using its ID as a filter.  

```
updateSupplier(supplier: UpdateSupplierInput): Supplier

input UpdateSupplierInput {
		id: ID!
		supplierNo: String
		supplierName: String
		tin: String
		contactNumber: String
		contactPerson: String
        }
```

