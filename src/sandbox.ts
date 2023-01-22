type TCountry = {
  name: string;
  code: string;
};

type TAffiliations = {
  readonly name: string;
  readonly city: string;
  readonly country: string;
};

type TPrize = {
  readonly year: string;
  readonly category: string;
  readonly share: string;
  readonly motivation: string;
  readonly affiliations: any;
};

type TLaureate = {
  id: string;
  firstname: string;
  surname: string;
  born: string;
  died: string;
  bornCountry: string;
  bornCountryCode: string;
  bornCity: string;
  diedCountry: string;
  diedCountryCode: string;
  diedCity: string;
  gender: string;
  readonly prizes: string;
};

const country: TCountry = { name: "Algeria", code: "DZ" };

const affiliations: readonly TAffiliations[] = [
  { name: "Harvard University", city: "Cambridge, MA", country: "USA" },
];

const prizes: readonly TPrize[] = [
  {
    year: "1972",
    category: "economics",
    share: "2",
    motivation:
      '"for their pioneering contributions to general economic equilibrium theory and welfare theory"',
    affiliations,
  },
];

const laureate: TLaureate = {
  id: "682",
  firstname: "Kenneth J.",
  surname: "Arrow",
  born: "1921-08-23",
  died: "2017-02-21",
  bornCountry: "USA",
  bornCountryCode: "US",
  bornCity: "New York, NY",
  diedCountry: "USA",
  diedCountryCode: "US",
  diedCity: "Palo Alto, CA",
  gender: "male",
  prizes,
};

console.dir({ country, laureate });
