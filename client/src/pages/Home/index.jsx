import { useContext, useEffect, useState } from 'react';
import Phone from '../../components/Phone';
import PhoneContext from '../../context/phone';
import { getPhone, listPhones } from '../../services/phones';
import './Home.scss';
import React from 'react';

const Home = () => {
  const [phones, setPhones] = useState([]);
  const { phone, setPhone } = useContext(PhoneContext);

  useEffect(() => {
    listPhones().then((data) => {
      const { phones } = data;
      setPhones(phones);
    });
  }, []);

  const handleShowPhone = (id) => {
    getPhone(id).then((data) => {
      const { phone } = data;
      setPhone(phone);
    });
  };

  const displayPhones = () => {
    return phones?.map((phone) => (
      <div
        className="Phone"
        onClick={() => handleShowPhone(phone.id)}
        key={phone.id}
      >
        <Phone data={phone} />
      </div>
    ));
  };

  if (!phone) {
    return (
      <div className="Home">
        <h1>Phones list:</h1>
        <div className="list">{displayPhones()}</div>
      </div>
    );
  } else {
    return <Phone data={phone} showFull={true} />;
  }
};

export default Home;
