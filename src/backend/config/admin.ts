import Resources from '../admin/resources';

export default (connection) => ({
  version: {
    admin: true,
  },
  branding: {
    companyName: 'Company name',
  },
  resources: Resources(connection),
});
