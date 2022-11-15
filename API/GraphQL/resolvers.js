const resolvers={
    createUser: ({input})=>{
        const user={};
        let id= Date.now()
        user[id]=id;
        user['firstName']= input.firstName;
        user['lastName']= input.lastName;
        user['email']= input.email;
        user['password']= input.password;
        return user;
    },

    createListRecord: ({input})=>{
        const list={};
        let id= Date.now()
        list[id]=id;
        list['firstName']= input.firstName;
        list['lastName']= input.lastName;
        list['age']= input.age;
        list['email']= input.email;
        list['language']= input.language;
        return list;
    }
}

export default resolvers;