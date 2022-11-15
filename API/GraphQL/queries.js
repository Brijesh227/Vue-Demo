export const alluser = `query{
    getUser(){
      courseName
      price
      email
      teachingAssists{
        lastName
        experience
      }
    }
  }`;