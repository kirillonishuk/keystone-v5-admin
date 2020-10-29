module.exports = async keystone => {
  const {
    data: {
      _allOrangeStaffsMeta: { count = 0 },
    },
  } = await keystone.executeGraphQL({
    context: keystone.createContext({ skipAccessControl: true }),
    query: `query {
      _allOrangeStaffsMeta {
        count
      }
    }`,
  });

  if (count === 0) {
    const password = '12345678';
    const email = 'maincoach@example.com';

    const { errors } = await keystone.executeGraphQL({
      context: keystone.createContext({ skipAccessControl: true }),
      query: `mutation initialOrangeStaff($password: String, $email: String) {
            createOrangeStaff(data: {firstname: "Admin", lastname: "Adminovi4", email: $email, isAdmin: true, password: $password}) {
              id
            }
          }`,
      variables: { password, email },
    });

    if (errors) {
      console.log('failed to create initial user:');
      console.log(errors);
    } else {
      console.log(`

      User created:
        email: ${email}
        password: ${password}
      Please change these details after initial login.
      `);
    }
  }
};
