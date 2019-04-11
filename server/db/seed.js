const faker = require('faker');
const db = require('./index.js');
const Home = require('./Home.js');


const urlPrefix = 'https://s3-us-west-1.amazonaws.com/fec-project-abodely-carousel/';

const homePhotos = [
  'Japan/photo-1480796927426-f609979314bd.jpeg',
  'Japan/photo-1490761668535-35497054764d.jpeg',
  'Japan/photo-1490806843957-31f4c9a91c65.jpeg',
  'Japan/photo-1493780474015-ba834fd0ce2f.jpeg',
  'Japan/photo-1493976040374-85c8e12f0c0e.jpeg',
  'Japan/photo-1503899036084-c55cdd92da26.jpeg',
  'Japan/photo-1504198453319-5ce911bafcde.jpeg',
  'Japan/photo-1504272017915-32d1bd315a59.jpeg',
  'Japan/photo-1505069190533-da1c9af13346.jpeg',
  'Japan/photo-1505440484611-23c171ad6e96.jpeg',
  'Japan/photo-1508051520491-77aa4bd2f507.jpeg',
  'Japan/photo-1508504509543-5ca56440e013.jpeg',
  'Japan/photo-1512580526143-1f24419088a3.jpeg',
  'Japan/photo-1513863264647-4f895e9af85d.jpeg',
  'Japan/photo-1517586783515-463aa9571631.jpeg',
  'Japan/photo-1517918558653-3a2c5ab393a2.jpeg',
  'Japan/photo-1519056894482-50b7093ce330.jpeg',
  'Japan/photo-1519057016395-76b7690327e0.jpeg',
  'Japan/photo-1522623349500-de37a56ea2a5.jpeg',
  'Japan/photo-1524413840807-0c3cb6fa808d.jpeg',
  'Japan/photo-1526383908167-3426a4c1c67a.jpeg',
  'Japan/photo-1526481280693-3bfa7568e0f3.jpeg',
  'Japan/photo-1527090496-346715f0b28d.jpeg',
  'Japan/photo-1527874526748-46cdbd2887be.jpeg',
  'Japan/photo-1528360983277-13d401cdc186.jpeg',
  'Japan/photo-1534247555660-d4af46712d27.jpeg',
  'Japan/photo-1536098561742-ca998e48cbcc.jpeg',
  'Japan/photo-1542051841857-5f90071e7989.jpeg',
  'Japan/photo-1542931287-023b922fa89b.jpeg',
  'Japan/photo-1543402701-24cfa4f3a93d.jpeg',
  'Italy/photo-1434025697302-54853b8da166.jpeg',
  'Italy/photo-1496301331109-7658c78361d4.jpeg',
  'Italy/photo-1496864137062-a12b5defe6be.jpeg',
  'Italy/photo-1504197885-609741792ce7.jpeg',
  'Italy/photo-1507110230240-6e2d230fd528.jpeg',
  'Italy/photo-1515859005217-8a1f08870f59.jpeg',
  'Italy/photo-1516483638261-f4dbaf036963.jpeg',
  'Italy/photo-1517792844039-e52afb564132.jpeg',
  'Italy/photo-1518797814703-ed31ee241ef8.jpeg',
  'Italy/photo-1520440229-6469a149ac59.jpeg',
  'Italy/photo-1523906921802-b5d2d899e93b.jpeg',
  'Italy/photo-1525441797047-b904bd328e09.jpeg',
  'Italy/photo-1527169369771-7e9243233c1b.jpeg',
  'Italy/photo-1527208043690-e3db1cc93456.jpeg',
  'Italy/photo-1528022656871-cfb326b4a39a.jpeg',
  'Italy/photo-1528026076623-0803e7448217.jpeg',
  'Italy/photo-1528123887526-0775584e2093.jpeg',
  'Italy/photo-1528489932140-a8be341a50d1.jpeg',
  'Italy/photo-1529260830199-42c24126f198.jpeg',
  'Italy/photo-1529419412599-7bb870e11810.jpeg',
  'Italy/photo-1531302710109-3e44877e3893.jpeg',
  'Italy/photo-1536783840042-a218b48bc070.jpeg',
  'Italy/photo-1541321814039-dc8c3e3a07cb.jpeg',
  'Italy/photo-1547064663-e9cfbcf39899.jpeg',
  'US/photo-1434137186716-a21ef91a36ba.jpeg',
  'US/photo-1479546085767-8903baea90c6.jpeg',
  'US/photo-1500111709600-7761aa8216c7.jpeg',
  'US/photo-1506047172435-2e699b9aae74.jpeg',
  'US/photo-1506047526346-2bad9ca0cec4.jpeg',
  'US/photo-1506146332389-18140dc7b2fb.jpeg',
  'US/photo-1519365433533-431801352d7b.jpeg',
  'US/photo-1519627745017-8f1c7ec8d37d.jpeg',
  'US/photo-1519678767534-29483894b34d.jpeg',
  'US/photo-1523768473926-71e2fd309c18.jpeg',
  'US/photo-1525978909390-6c9f25931128.jpeg',
  'US/photo-1526404423292-15db8c2334e5.jpeg',
  'US/photo-1526412761713-d6d61969f1f7.jpeg',
  'US/photo-1527181588050-9015d57e1cbe.jpeg',
  'US/photo-1527484912758-6e8bf56b18c3.jpeg',
  'US/photo-1532418161550-f1ac0587f41b.jpeg',
  'US/photo-1532556699449-21988cf3aacf.jpeg',
  'US/photo-1534050359320-02900022671e.jpeg',
  'US/photo-1540937023473-bff351b2560b.jpeg',
  'US/photo-1547190994-0dfe4ab1bdae.jpeg',
  'US/photo-1549865719-362cb29c7662.jpeg',
  'US/photo-1551074497-7c3d606bec52.jpeg',
  'Singapore/photo-1490105171842-5fab28613c56.jpeg',
  'Singapore/photo-1494211870102-df67df81b14c.jpeg',
  'Singapore/photo-1496898382483-9a789056ffe8.jpeg',
  'Singapore/photo-1498544921269-5a3045edb62e.jpeg',
  'Singapore/photo-1507892329592-3c7ed560bf65.jpeg',
  'Singapore/photo-1508964942454-1a56651d54ac.jpeg',
  'Singapore/photo-1515995670062-b3c1f7bbb5dc.jpeg',
  'Singapore/photo-1516496636080-14fb876e029d.jpeg',
  'Singapore/photo-1529249253183-eff5a92740df.jpeg',
  'Singapore/photo-1534683251650-3fd64cd1561a.jpeg',
  'Singapore/photo-1539402343922-550ff6b957e9.jpeg',
  'Singapore/photo-1540636424142-e9996d021ee0.jpeg',
  'Singapore/photo-1540960205670-9af957a53070.jpeg',
  'Singapore/photo-1542114633831-6c3880908875.jpeg',
  'Singapore/photo-1542115222561-1c49a2be1d70.jpeg',
  'Singapore/photo-1544718970-c98c4aa40ebc.jpeg',
  'Singapore/photo-1547624742-4e772623e332.jpeg',
  'Singapore/photo-1552406712-1ff867fb0b6e.jpeg',
];

const randomRating = () => {
  const rating = ['2', '2.5', '3', '3.5', '4', '4.5', '5'];
  return rating[Math.ceil(Math.random() * 6)];
};

const randomType = () => {
  const homeType = ['Entire place', 'Private room', 'Hotel Room', 'Shared Room'];
  return `${homeType[Math.floor(Math.random() * 3)]} • ${faker.address.city()}`;
};

const randomDescriptor = () => {
  const homeDescriptor = ['Studio', 'Loft', 'Apartment', 'House', 'Home', 'Condo', 'Cabin', 'Sweet', 'Duplex', 'Town-Home', 'Villa', 'Vacation-House', 'Yurt', 'Bungaloo', 'Chalet', 'Penthouse', 'Terrace', 'Cottage'];
  let buzzWord = faker.company.bsAdjective().split('');
  buzzWord[0] = buzzWord[0].toUpperCase();
  buzzWord = buzzWord.join('');
  return `${buzzWord} ${homeDescriptor[Math.floor(Math.random() * 17)]} in ${faker.address.city()}`;
};

const createSampleHomes = (arr) => {
  const sampleData = arr.map((home) => {
    const homeData = {
      propertyAvail: randomType(),
      locationName: randomDescriptor(),
      photoUrl: urlPrefix + home,
      price: Math.floor(Math.random() * (1500 - 75)) + 75,
      rating: randomRating(),
      reviewCount: Math.floor(Math.random() * (1000 - 25)) + 25,
    };
    return homeData;
  });
  return sampleData;
};

const sampleHomes = createSampleHomes(homePhotos);

const insertSampleData = () => {
  Home.bulkCreate(sampleHomes);
};

db.drop();

db.sync()
  .then(() => insertSampleData());
