export const ReferralModel = {
  id: {
    type: 'number',
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: 'string',
    required: true,
  },
  email: {
    type: 'string',
    required: true,
    unique: true,
  },
  phone: {
    type: 'string',
    required: true,
  },
  message: {
    type: 'string',
    required: true,
  },
  createdAt: {
    type: 'date',
    default: () => new Date(),
  },
};