import { useEffect } from "react";

export const checkUniqueEmail = (dbUsers, user) => {
  const select = dbUsers.filter((data) => {
    return data.email === user.email;
  });

  return select[0]?.email === user?.email;
};

export const isValidDetails = (user, { email, password }) => {
  const details = user.map((doc) => doc.data());
  const data = details.filter(
    (data) => data.email === email.toLowerCase() && data.password === password
  );
  const log = data[0].email === email && data[0].password === password;
  const userData = data[0];
  return { log, userData };
};

export const filterData = (input, data) => {
  const title = input.toLowerCase();
  return data.filter((post) => post?.title.toLowerCase().includes(title));
};


export const getIndex=(input,blogs)=>{
  const id= input;
  const post= blogs.filter(data=>data.id ==id);
  return blogs.indexOf(post[0])
}
