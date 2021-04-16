const User = ({ userName, lastName }) => {
  return (
    <div>
      <h2>{userName}</h2>
      <p>{lastName}</p>
    </div>
  );
};

export default User;
