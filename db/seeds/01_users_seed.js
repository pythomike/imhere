
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email:"joel@joel.joel",password:"",first_name:"Joel",last_name:"Shinness",phone_number:"349-691-7379"},
        {email:"mike@gmail.com",password:"",first_name:"Mike",last_name:"Morganti",phone_number:"230-730-2720"},
        {email:"ili@gmail.com",password:"",first_name:"Ili",last_name:"Pascu",phone_number:"401-610-8441"},
        {email:"shane@gmail.com",password:"",first_name:"Shane",last_name:"Richman",phone_number:"664-190-1682"},
        {email:"greg@@gmail.com",password:"",first_name:"Greg",last_name:"Littrik",phone_number:"295-862-6782"},
        {email:"finn@gmail.com",password:"",first_name:"Finn",last_name:"Ouldcott",phone_number:"178-972-3257"},
        {email:"eddy@gmail.com",password:"",first_name:"Eddy",last_name:"Farrant",phone_number:"806-969-0876"},
        {email:"dean@gmail.com",password:"",first_name:"Dean",last_name:"Kerbler",phone_number:"654-583-1410"},
        {email:"thomas@gmail.com",password:"",first_name:"Thomas",last_name:"Yushkov",phone_number:"727-174-6528"},
        {email:"mel@gmail.com",password:"",first_name:"Mel",last_name:"Boik",phone_number:"311-485-3050"},
        {email:"shawn@gmail.com.com",password:"",first_name:"Shawn",last_name:"Florez",phone_number:"153-226-3870"},
        {email:"jon@gmail.com",password:"",first_name:"Jon",last_name:"Burrett",phone_number:"944-915-1511"},
        {email:"travis@gmail.com",password:"",first_name:"Travis",last_name:"Wollard",phone_number:"721-297-6088"},
        {email:"Isaiah@gmail.com",password:"",first_name:"Isaiah",last_name:"Bestall",phone_number:"549-588-3523"},
        {email:"curtis@gmail.com",password:"",first_name:"Curtis",last_name:"Proske",phone_number:"206-662-3123"},
        {email:"don@gmail.com",password:"",first_name:"Don",last_name:"Lusgdin",phone_number:"652-721-1849"},
      ]);
    });
};
