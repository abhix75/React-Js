const Section = ({ title ,description}) => {
  return (
    <div className="border border-black m-2 p-2">
      <h3 className="font-bold text-xl">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Instamart = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl">InstaMart</h1>
      <Section
        title="About Instamart"
        description="Hey budddy cjfsfvnvdshvsivsahfwofusdnmdiobjpfiafsb,ndihawp0i;fjdvbuPDISDKVHBFOOFIWFLJSIUWEFIASLSDUVHWEIDQPkdjdsjhbvoidsdjASHQEID BQSOSIOHDISHVP KVMA DFPBI   DKIVODQ HF I 'FBIWFDM NIHQD"
      />
      <Section title={"Team Instamart"}
        description={"skbakhfasfsldjlsdjlsjnlsjlsjmflsensnfsdnlsenvlsenlsenlsnvlsenflsnflasnf"}
      />
      <Section title={"Career Instamart"}
        description={"bfdbfjhfkfjksnfksnfksnkanakn"}
      />
    </div>
  );
};

export default Instamart;
