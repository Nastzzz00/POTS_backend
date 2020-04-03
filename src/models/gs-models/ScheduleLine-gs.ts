import { createSchema, createModel } from 'gsheeez';

const ScheduleLineSchema = new createSchema({
  range: 'A:F',
  header: [
    'quantity',
    'uom',
    'unitPrice',
    'totalAmount',
    'deliveryDateAndTime',
    'deliveryStatus',
  ],
});

export default createModel(ScheduleLineSchema);
